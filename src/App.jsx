import 'regenerator-runtime/runtime'
import { h } from 'preact'
import { useState } from 'preact/hooks'
import * as classes from './App.css'

import Image from '/src/components/Image'
import Body from '/src/components/typography/Body'
import Search from '/src/components/Search'
import SpeechBox from '/src/components/SpeechBox'
import Title from '/src/components/typography/Title'
import Menu from '/src/components/Menu'

import CardContext from '/src/logic/contexts/card'
import CharacterContext from '/src/logic/contexts/character'
import BrowserContext from '/src/logic/contexts/browser'
import orNull from '/src/logic/utils/orNull'

import { BANJO } from '/src/constants/character'
import {
	FIREFOX, CHROME, SAFARI, EDGE, UNSUPPORTED,
} from '/src/constants/browser'

import BanjoJace from '/src/static/images/banjo_jace.png'

const App = () => {
	const [cardData, setCardData] = useState()
	const [character, setCharacter] = useState(BANJO)
	const [browser, setBrowser] = useState('')
	
	const { userAgent = '', vendor } = navigator
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

	console.log(browser)

	return (
		<BrowserContext.Provider value={{ browser }}>
			<CardContext.Provider value={{ cardData, setCardData }}>
				<CharacterContext.Provider value={{ character, setCharacter }}>
					<div className={classes.app}>
						<Menu />
						<div className={classes.banjoJaceWrapper}>
							<Image
								src={BanjoJace}
								alt="Banjo the Mindwalker"
								className={classes.banjoJace}
							/>
						</div>
						<div className={classes.contentContainer}>
							<Body>
								Enter the Multiverse ID or name of a Magic the Gathering card to have Banjo read the card text!
							</Body>
							<Search />
							{orNull(
								cardData,
								<Title>{cardData?.name}</Title>
							)}
							<SpeechBox />
						</div>
					</div>
				</CharacterContext.Provider>
			</CardContext.Provider>
		</BrowserContext.Provider>
	)
}

export default App
