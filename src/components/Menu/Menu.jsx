import { h, Fragment } from 'preact'
import { useState, useContext } from 'preact/hooks'

import orNull from '/src/logic/utils/orNull'
import ternary from '/src/logic/utils/ternary'
import CharacterContext from '/src/logic/contexts/character'
import CardContext from '/src/logic/contexts/card'

import { CHARACTER_DATA } from '/src/constants/character'

import MenuIcon from '/src/components/icons/Menu'
import XIcon from '/src/components/icons/X'
import Body from '/src/components/typography/Body'
import CharacterPortrait from '/src/components/CharacterPortrait'

import * as classes from './Menu.css'

const Button = ({ setIsMenuOpen, type, className }) => {
	const isMenuButton = type === 'menu'
	const classString = `${classes.icon} ${className}`
	return (
		<button
			onClick={() => setIsMenuOpen(isMenuButton)}
			className={classes.iconButton}
		>
			{ternary(
				isMenuButton,
				<MenuIcon className={classString} />,
				<XIcon className={classString} colorClassName={classes.closeIcon} />
			)}
		</button>
	)
}

const CharacterSelectPortrait = ({ setCharacter, setCardData, character, type }) => (
	<button
		onClick={(e) => {
			e.preventDefault()
			e.stopPropagation()
			setCardData(null)
			setCharacter(type)
		}}
		className={`
			${classes.selectButton} 
			${character === type && classes.currentSelection}
		`}
	>
		<CharacterPortrait
			character={type}
			shouldAnimate={character === type}
		/>
	</button>
)

const Menu = () => {
	const { setCharacter, character } = useContext(CharacterContext)
	const { setCardData } = useContext(CardContext)
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	return (
		<Fragment>
			{ternary(
				isMenuOpen,
				<div className={classes.icon} />,
				<Button type="menu" setIsMenuOpen={setIsMenuOpen} />,
			)}
			{orNull(
				isMenuOpen,
				<div className={classes.menuOverlay} onClick={() => setIsMenuOpen(false)}>
					<div className={classes.menuContent}>
						<Button
							type="close"
							setIsMenuOpen={setIsMenuOpen}
						/>
						<div className={classes.characterSelectBlock}>
							<Body className={classes.text}>
								Select a character to read your cards
							</Body>
							<div className={classes.portraitRow}>
								{Object.keys(CHARACTER_DATA).map(
									(charKey) => (
										<CharacterSelectPortrait
											type={charKey}
											character={character}
											setCharacter={setCharacter}
											setCardData={setCardData}
										/>
									)
								)}
							</div>
						</div>
					</div>
				</div>
			)}
		</Fragment>
	)
}

export default Menu
