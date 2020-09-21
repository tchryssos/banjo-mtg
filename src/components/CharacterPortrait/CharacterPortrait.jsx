import { h } from 'preact'
import { useContext } from 'preact/hooks'
import { CHARACTER_DATA, BANJO } from 'ttt/constants/character'
import { SAFARI } from 'ttt/constants/browser'
import BrowserContext from 'ttt/logic/contexts/browser'
import Image from 'ttt/components/Image'
import * as classes from './CharacterPortrait.css'

const CharacterPortrait = ({ className, shouldAnimate = true, character = BANJO }) => {
	const characterData = CHARACTER_DATA[character]
	const { browser } = useContext(BrowserContext)
	const safariRotate = browser === SAFARI && shouldAnimate
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
					${classes.portrait} ${safariRotate && classes.rotateHead} ${className}
				`}
			/>
		</picture>
	)
}

export default CharacterPortrait