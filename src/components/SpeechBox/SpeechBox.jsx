import { h } from 'preact'
import {
	useContext, useRef, useState, useEffect, useCallback,
} from 'preact/hooks'

import CardContext from 'ttt/logic/contexts/card'
import CharacterContext from 'ttt/logic/contexts/character'
import orNull from 'ttt/logic/utils/orNull'
import { speakAndSet } from 'ttt/logic/speech'

import Body from 'ttt/components/typography/Body'
import CharacterPortrait from 'ttt/components/CharacterPortrait'

import { CHARACTER_DATA, KAZOOIE, GRUNTILDA, BANJO } from 'ttt/constants/character'

import * as classes from './SpeechBox.css'

const SpeechBox = ({ className }) => {
	const [audioArray, setAudioArray] = useState([])
	const [isSpeaking, setIsSpeaking] = useState(false)
	const [displayText, setDisplayText] = useState('')

	const { cardData, cardError, setCardError } = useContext(CardContext)
	const { character } = useContext(CharacterContext)

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
		setCardError('')
		reset()
		setOrResetSamples()
	}, [character])

	useEffect(() => {
		if (isInitializedRef.current) { // Only run this after initialization of component
			if (cardData && cardDescriptionRef.current) {
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

	return orNull(
		cardData || cardError,
		<div className={`${className} ${classes.textBox}`}>
			<CharacterPortrait
				className={classes.characterHead}
				character={cardError ? BANJO : character}
				shouldAnimate={isSpeaking && !cardError}
			/>
			<div className={classes.cardDesc} ref={cardDescriptionRef}>
				<Body className={classes.boxBody}>{cardError || displayText}</Body>
			</div>
		</div>
	)
}

export default SpeechBox
