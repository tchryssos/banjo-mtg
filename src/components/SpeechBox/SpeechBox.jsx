import { h } from 'preact'
import { useContext } from 'preact/hooks'

import CardContext from '/src/logic/contexts/card'
import orNull from '/src/logic/utils/orNull'

const SpeechBox = () => {
	const { cardData } = useContext(CardContext)

	return orNull(
		cardData,
		(
			<div>
				{cardData?.text || cardData?.flavor}
			</div>
		),
	)
}

export default SpeechBox
