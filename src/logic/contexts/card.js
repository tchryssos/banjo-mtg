import { createContext } from 'preact'

const CardContext = createContext({
	cardData: {},
	cardError: '',
	setCardError: () => {},
	setCardData: () => {},
})

export default CardContext
