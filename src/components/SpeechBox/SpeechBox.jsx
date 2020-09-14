import { h } from 'preact'
import {
	useContext, useRef, useState, useEffect, useCallback,
} from 'preact/hooks'

import CardContext from '/src/logic/contexts/card'
import CharacterContext from '/src/logic/contexts/character'
import orNull from '/src/logic/utils/orNull'
import { speakAndSet } from '/src/logic/speech'

import Image from '/src/components/Image'
import Body from '/src/components/typography/Body'

import { CHARACTER_DATA } from '/src/constants/character'

import * as classes from './SpeechBox.css'

const SpeechBox = ({ className }) => {
	const [audioArray, setAudioArray] = useState([])
	const [isSpeaking, setIsSpeaking] = useState(false)
	const [displayText, setDisplayText] = useState('')

	const { cardData } = useContext(CardContext)
	const { character } = useContext(CharacterContext)

	const textRef = useRef('')
	const syllableTimeoutsRef = useRef([])
	const wordTimeoutsRef = useRef([])
	const cardDescriptionRef = useRef()
	const isInitializedRef = useRef(false)

	const characterData = CHARACTER_DATA[character]

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
			if (cardData && cardDescriptionRef.current) {
				speakAndSet({
					responseText: cardData.text || cardData.flavor,
					textRef,
					setDisplayText,
					voiceArray: audioArray,
					syllableTimeoutsRef,
					wordTimeoutsRef,
					descriptionElement: cardDescriptionRef,
					setIsSpeaking,
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
		cardData,
		(
			<div className={`${className} ${classes.textBox}`}>
				<Image
					src={characterData.icon}
					alt={character}
					className={`
						${classes.characterHead}${' '}
						${isSpeaking && classes.speakingHead}
					`}
				/>
				<div className={classes.cardDesc} ref={cardDescriptionRef}>
					<Body>{displayText}</Body>
				</div>
			</div>
		),
	)
}

export default SpeechBox
