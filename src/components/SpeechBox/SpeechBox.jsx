import { h, Fragment } from 'preact'
import {
	useContext, useRef, useState, useEffect, useCallback,
} from 'preact/hooks'

import CardContext from '/src/logic/contexts/card'
import CharacterContext from '/src/logic/contexts/character'
import BrowserContext from '/src/logic/contexts/browser'
import orNull from '/src/logic/utils/orNull'
import { speakAndSet, safariAudioSetup } from '/src/logic/speech'

import Body from '/src/components/typography/Body'
import CharacterPortrait from '/src/components/CharacterPortrait'
import Play from '/src/components/icons/Play'
import Button from '/src/components/Button'

import { CHARACTER_DATA, KAZOOIE, GRUNTILDA } from '/src/constants/character'
import { SAFARI } from '/src/constants/browser'

import * as classes from './SpeechBox.css'

const SpeechBox = ({ className }) => {
	const [audioArray, setAudioArray] = useState([])
	const [isSpeaking, setIsSpeaking] = useState(false)
	const [userHasPlayed, setUserHasPlayed] = useState(false)
	const [displayText, setDisplayText] = useState('')

	const { cardData } = useContext(CardContext)
	const { character } = useContext(CharacterContext)
	const { browser } = useContext(BrowserContext)

	const textRef = useRef('')
	const syllableTimeoutsRef = useRef([])
	const wordTimeoutsRef = useRef([])
	const cardDescriptionRef = useRef()
	const isInitializedRef = useRef(false)

	const characterData = CHARACTER_DATA[character]

	// Multiplier to convert seconds from audio duration to milliseconds
	// By dropping the multiplier from 1000, we're able to speed up playback.
	let audioSpeed
	switch (character) {
		case KAZOOIE:
			audioSpeed = 1000
			break
		case GRUNTILDA:
			audioSpeed = 680
			break
		default: // BANJO
			audioSpeed = 850
	}

	const setOrResetSamples = useCallback(() => {
		if (characterData) {
			const { low, mid, hi } = characterData.audio
			const sampleArray = [low, mid, hi]
			if (audioArray.length) {
				setAudioArray([
					...audioArray.map(
						(audioEl, i) => {
							audioEl.src = sampleArray[i]
							return audioEl
						}
					)
				])
			} else {
				setAudioArray(
					sampleArray.map(
						(sample) => new Audio(sample)
					)
				)
			}
		}
	}, [character])

	const reset = useCallback(() => {
		audioArray.forEach(
			(audio) => audio.src = ''
		)
		textRef.current = ''
		syllableTimeoutsRef.current.forEach(
			(timeout) => clearTimeout(timeout)
		)
		wordTimeoutsRef.current.forEach(
			(timeout) => clearTimeout(timeout)
		)
		setDisplayText('')
	}, [audioArray])

	useEffect(() => {
		reset()
		setOrResetSamples()
	}, [character])

	useEffect(() => {
		if (isInitializedRef.current) { // Only run this after initialization of component
			if (
				cardData
				&& cardDescriptionRef.current
				&& !(browser === SAFARI && !userHasPlayed)
			) {
				// Safari doesn't allow auto-play audio
				// so we need to allow the user to enable audio on each card search
				// @TODO there may be a way to have audio begin 'muted'
				speakAndSet({
					responseText: cardData.text || cardData.flavor,
					textRef,
					setDisplayText,
					voiceArray: audioArray,
					syllableTimeoutsRef,
					wordTimeoutsRef,
					setIsSpeaking,
					audioSpeed
				})
			} else { // cardData gets reset to null before a search
				reset()
				setOrResetSamples()
			}
		} else {
			isInitializedRef.current = true
		}
	}, [cardData])

	if (!cardData) {
		return orNull(
			browser === SAFARI && !userHasPlayed,
			<Button
				onClick={() => {
					safariAudioSetup()
					setUserHasPlayed(true)
				}}
				className={classes.playButton}
			>
				<Play />
			</Button>
		)
	}
	return (
		<div className={`${className} ${classes.textBox}`}>
		<CharacterPortrait
			className={classes.characterHead}
			character={character}
			shouldAnimate={isSpeaking}
		/>
		<div className={classes.cardDesc} ref={cardDescriptionRef}>
			<Body>{displayText}</Body>
		</div>
	</div>
	)
}

export default SpeechBox
