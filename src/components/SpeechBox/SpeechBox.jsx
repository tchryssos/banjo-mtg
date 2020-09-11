import { h } from 'preact'
import {
	useContext, useRef, useState, useEffect,
} from 'preact/hooks'

import CardContext from '/src/logic/contexts/card'
import CharacterContext from '/src/logic/contexts/character'
import orNull from '/src/logic/utils/orNull'

import Image from '/src/components/Image'
import Body from '/src/components/typography/Body'

import { CHARACTER_DATA } from '/src/constants/character'

import * as classes from './SpeechBox.css'

const SpeechBox = ({ className }) => {
	const [cardText, setCardText] = useState('')
	const [audioArray, setAudioArray] = useState([])
	const { cardData } = useContext(CardContext)
	const { character } = useContext(CharacterContext)
	const syllableTimeoutsRef = useRef([])
	const wordTimeoutsRef = useRef([])
	const cardDescriptionRef = useRef()

	const characterData = CHARACTER_DATA[character]

	useEffect(() => {
		if (characterData) {
			const { low, mid, hi } = characterData.audio
			const sampleArray = [low, mid, hi]
			if (audioArray.length) {
				setAudioArray([
					...audioArray.map(
						(audioEl, i) => audioEl.src = sampleArray[i]
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

	return orNull(
		cardData,
		(
			<div className={`${className} ${classes.textBox}`}>
				<Image
					src={characterData.icon}
					alt={character}
					className={classes.characterHead}
				/>
				<div className={classes.cardDesc} ref={cardDescriptionRef}>
					<Body>{ cardData?.text || cardData?.flavor}</Body>
				</div>
			</div>
		),
	)
}

export default SpeechBox
