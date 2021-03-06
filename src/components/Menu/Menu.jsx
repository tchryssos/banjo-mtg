import { h } from 'preact'
import { useContext } from 'preact/hooks'

import ternary from 'ttt/logic/utils/ternary'
import CharacterContext from 'ttt/logic/contexts/character'
import CardContext from 'ttt/logic/contexts/card'

import { CHARACTER_DATA } from 'ttt/constants/character'

import MenuIcon from 'ttt/components/icons/Menu'
import XIcon from 'ttt/components/icons/X'
import Body from 'ttt/components/typography/Body'
import CharacterPortrait from 'ttt/components/CharacterPortrait'

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
			className={classes.menuPortrait}
		/>
	</button>
)

const Menu = ({ className }) => {
	const { setCharacter, character } = useContext(CharacterContext)
	const { setCardData } = useContext(CardContext)
	return (
		<div className={`${classes.menuContent} ${className}`}>
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
	)
}

export default Menu
