import { h } from 'preact'
import { useContext } from 'preact/hooks'

import CardContext from '/src/logic/contexts/card'
import CharacterContext from '/src/logic/contexts/character'
import orNull from '/src/logic/utils/orNull'

import Image from '/src/components/Image'
import Body from '/src/components/typography/Body'

import { CHARACTER_DATA } from '/src/constants/character'

import * as classes from './SpeechBox.css'

const SpeechBox = ({ className }) => {
	const { cardData } = useContext(CardContext)
	const { character } = useContext(CharacterContext)
	const characterData = CHARACTER_DATA[character]

	return orNull(
		cardData,
		(
			<div className={`${className} ${classes.textBox}`}>
				<Image
					src={characterData.icon}
					alt={character}
					className={classes.characterHead}
				/>
				<div className={classes.cardDesc}>
					<Body>{ cardData?.text || cardData?.flavor}</Body>
				</div>
			</div>
		),
	)
}

export default SpeechBox

// {cardData?.text || cardData?.flavor}
