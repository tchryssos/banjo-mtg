import { h } from 'preact'
import { useState } from 'preact/hooks'

import CardContext from '/src/logic/contexts/card'
import CharacterContext from '/src/logic/contexts/character'
import BrowserContext from '/src/logic/contexts/browser'

import { BANJO } from '/src/constants/character'
import {
	FIREFOX, CHROME, SAFARI, EDGE, UNSUPPORTED,
} from '/src/constants/browser'

const Provider = ({ children }) => {
	const [cardData, setCardData] = useState()
	const [character, setCharacter] = useState(BANJO)
	const [browser, setBrowser] = useState('')
	
	const { userAgent = '', vendor = '' } = navigator
	const lUserAgent = userAgent.toLowerCase()
	if (lUserAgent.includes('firefox')) {
		setBrowser(FIREFOX)
	} else if (lUserAgent.includes('edg/')) {
		setBrowser(EDGE)
	} else if (vendor.toLowerCase().includes('apple')) {
		setBrowser(SAFARI)
	} else if (lUserAgent.includes('chrome')) {
		setBrowser(CHROME)
	} else {
		setBrowser(UNSUPPORTED)
	}

	return (
		<BrowserContext.Provider value={{ browser }}>
			<CardContext.Provider value={{ cardData, setCardData }}>
				<CharacterContext.Provider value={{ character, setCharacter }}>
					{children}
				</CharacterContext.Provider>
			</CardContext.Provider>
		</BrowserContext.Provider>
	)
}

export default Provider
