import { h } from 'preact'
import { useContext } from 'preact/hooks'
import { CHARACTER_DATA, BANJO } from '/src/constants/character'
import { SAFARI } from '/src/constants/browser'
import BrowserContext from '/src/logic/contexts/browser'
import Image from '/src/components/Image'
import * as classes from './CharacterPortrait.css'

const CharacterPortrait = ({ className, shouldAnimate = true, character = BANJO }) => {
	const characterData = CHARACTER_DATA[character]
	const { browser } = useContext(BrowserContext)
	return (
		<picture>
			<source
				type={shouldAnimate ? 'image/webp' : 'image/png'}
				srcSet={shouldAnimate ? characterData.animated : characterData.icon}
			/>
			<Image
				src={characterData.icon}
				alt={character}
				className={`
					${classes.portrait} ${className} ${browser === SAFARI && classes.rotateHead}
				`}
			/>
		</picture>
	)
}

export default CharacterPortrait