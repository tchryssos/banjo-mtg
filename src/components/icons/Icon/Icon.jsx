import { h } from 'preact'
import * as classes from './Icon.css'

const Icon = ({
	viewBox = '0 0 24 24',
	className,
	children,
}) => (
	<svg
		className={`${className} ${classes.svg}`}
		viewBox={viewBox}
		xmlns="http://www.w3.org/2000/svg"
	>
		{children}
	</svg>
)

export default Icon
