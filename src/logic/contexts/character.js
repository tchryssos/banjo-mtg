import { createContext } from 'preact'

const CharacterContext = createContext({
	character: '',
	setCharacter: () => {},
})

export default CharacterContext
