import { h } from 'preact'
import { useState } from 'preact/hooks'

import CardContext from 'ttt/logic/contexts/card'
import CharacterContext from 'ttt/logic/contexts/character'
import BrowserContext from 'ttt/logic/contexts/browser'

import { BANJO } from 'ttt/constants/character'
import {
	FIREFOX, CHROME, SAFARI, EDGE, UNSUPPORTED,
} from 'ttt/constants/browser'

const Provider = ({ children }) => {
	const [cardData, setCardData] = useState()
	const [cardError, setCardError] = useState('')
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
			<CardContext.Provider value={{ cardData, setCardData, cardError, setCardError }}>
				<CharacterContext.Provider value={{ character, setCharacter }}>
					{children}
				</CharacterContext.Provider>
			</CardContext.Provider>
		</BrowserContext.Provider>
	)
}

export default Provider
