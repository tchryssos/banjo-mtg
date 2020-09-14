import { h } from 'preact'

import { CHARACTER_DATA, BANJO } from '/src/constants/character'

import Image from '/src/components/Image'

const CharacterPortrait = ({ className, shouldAnimate = true, character = BANJO }) => {
	const characterData = CHARACTER_DATA[character]

	return (
		<picture>
			<source
				type={shouldAnimate ? 'image/webp' : 'image/png'}
				srcSet={shouldAnimate ? characterData.animated : characterData.icon}
			/>
			<Image
				src={characterData.icon}
				alt={character}
				className={className}
			/>
		</picture>
	)
}

export default CharacterPortrait