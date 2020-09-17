import { h } from 'preact'

import * as classes from './Button.css'

const Button = ({ onClick, className, children, transparent = true }) => (
	<button
		onClick={onClick}
		className={`
			${classes.button} ${transparent && classes.transparent} ${className}
		`}
	>
		{children}
	</button>
)

export default Button
