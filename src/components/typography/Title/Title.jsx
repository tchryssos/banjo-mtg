import { h } from 'preact'
import * as classes from './Title.css'

const Title = ({ className, children }) => (
	<h1 className={`${className} ${classes.title}`}>
		{children}
	</h1>
)

export default Title
