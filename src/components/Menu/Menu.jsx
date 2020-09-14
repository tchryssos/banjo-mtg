import { h, Fragment } from 'preact'
import { useState } from 'preact/hooks'

import orNull from '/src/logic/utils/orNull'
import ternary from '/src/logic/utils/ternary'

import MenuIcon from '/src/components/icons/Menu'
import XIcon from '/src/components/icons/X'
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

const Menu = () => {
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
				<div className={classes.menuOverlay}>
					<div className={classes.menuContent}>
						<Button
							type="close"
							setIsMenuOpen={setIsMenuOpen}
						/>
					</div>
				</div>
			)}
		</Fragment>
	)
}

export default Menu
