import { h } from 'preact'

const Image = ({ src, alt = '', className }) => (
	<img
		src={src}
		className={className}
		alt={alt}
	/>
)

export default Image
