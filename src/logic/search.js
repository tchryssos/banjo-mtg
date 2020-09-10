const isCardId = (id) => !!parseInt(id, 10)

const fetchCard = (searchVal) => {
	const fetchTail = isCardId(searchVal) ? searchVal : `?name=${searchVal}`
	return fetch(`https://api.magicthegathering.io/v1/cards/${fetchTail}`)
}

export const cardSearch = (searchVal) => {
	if (!searchVal) {
		throw new Error('Please include a card ID or name')
	}
	fetchCard(searchVal)
		.then((response) => response.json())
		.then((data) => {
			if (!isCardId(searchVal) && !data.cards.length) {
				throw new Error('No cards found with that name. Please try again.')
			}
			if (data.card) {
				console.log(data.card.name)
			}
		})
}
