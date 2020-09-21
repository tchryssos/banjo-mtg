import 'regenerator-runtime/runtime'
import { h } from 'preact'
import { useContext } from 'preact/hooks'
import * as classes from './App.css'

import Provider from 'ttt/components/Provider'
import Image from 'ttt/components/Image'
import Search from 'ttt/components/Search'
import SpeechBox from 'ttt/components/SpeechBox'
import Title from 'ttt/components/typography/Title'
import Menu from 'ttt/components/Menu'

import CardContext from 'ttt/logic/contexts/card'
import orNull from 'ttt/logic/utils/orNull'

import BanjoJace from 'ttt/static/images/banjo_jace.png'

const AppContent = () => {
	const { cardData, cardError } = useContext(CardContext)

	return (
		<div className={classes.app}>
			<div className={classes.backgroundContainer}>
				<div className={classes.background} />
			</div>

			<div className={classes.pageWrapper}>
				<div className={classes.banjoJaceWrapper}>
					<Image
						src={BanjoJace}
						alt="Banjo the Mindwalker"
						className={classes.banjoJace}
					/>
				</div>
				<div className={classes.contentContainer}>
					{orNull(
						cardData || cardError,
						<Title className={classes.cardTitle}>
							{cardError ? 'Error!' : cardData?.name}
						</Title>
					)}
					<SpeechBox />

					<Search />

					<Menu className={classes.menu} />
				</div>
			</div>
		</div>
	)
}

const App = () => (
	<Provider>
		<AppContent />
	</Provider>
)

export default App
