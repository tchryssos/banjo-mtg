import checkSimilarity, { createNGram } from '/src/logic/utils/checkSimilarity'

const isCardId = (id) => !!parseInt(id, 10)

const fetchCard = (searchVal) => {
	const fetchTail = isCardId(searchVal) ? searchVal : `?name=${searchVal}`
	return fetch(`https://api.magicthegathering.io/v1/cards/${fetchTail}`)
}

const cardSuccess = (responseData, searchVal) => {
	const { card, cards } = responseData
	if (card) {
		return card
	}
	const queryNGram = createNGram(searchVal.toLowerCase())
	return cards.reduce(
		(acc, curr, i, arr) => {
			// If current card name is an exact match for the query, use that card...
			if (curr.name.toLowerCase() === searchVal.toLowerCase()) {
				arr.splice(1) // modifying original array breaks reduce
				return { data: curr }
			}

			// ... otherwise run a similarity check on the current card name and the query
			// and keep the most relevant one
			const currRelevance = checkSimilarity(curr.name.toLowerCase(), queryNGram)
			if (currRelevance.score > acc.score) {
				return { data: curr, ...currRelevance }
			}
			return acc
		}, { data: {}, nGram: [], score: 0 },
	).data
}

export const cardSearch = (searchVal) => {
	if (!searchVal) {
		throw new Error('Please include a card ID or name')
	}
	fetchCard(searchVal)
		.then((responsePromise) => responsePromise.json())
		.then((responseData) => {
			if (responseData.error) {
				throw responseData.error
			}
			if (!isCardId(searchVal) && !responseData.cards.length) {
				throw new Error('No cards found with that name. Please try again.')
			}
			return cardSuccess(responseData, searchVal)
		})
		.catch((error) => {
			throw new Error(error)
		})
}
