import { h } from 'preact'

import Icon from '/src/components/icons/Icon'

const Loading = ({ className }) => (
	<Icon className={className}>
		<path d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z" />
	</Icon>
)

export default Loading
