// import 'regenerator-runtime/runtime'
import { h } from 'preact'
import { useContext } from 'preact/hooks'
import * as classes from './App.css'

import Provider from '/src/components/Provider'
import Image from '/src/components/Image'
import Search from '/src/components/Search'
import SpeechBox from '/src/components/SpeechBox'
import Title from '/src/components/typography/Title'
import Menu from '/src/components/Menu'

import CardContext from '/src/logic/contexts/card'
import orNull from '/src/logic/utils/orNull'

import BanjoJace from '/src/static/images/banjo_jace.png'

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
