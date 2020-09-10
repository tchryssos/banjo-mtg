import { createContext } from 'preact'

const CardContext = createContext({
	cardData: {},
	setCardData: () => {},
})

export default CardContext
