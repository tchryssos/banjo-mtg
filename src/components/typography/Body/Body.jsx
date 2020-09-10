import { h } from 'preact'
import * as classes from './Body.css'

const Body = ({ children, className }) => (
	<p className={`${className} ${classes.body}`}>
		{children}
	</p>
)

export default Body
