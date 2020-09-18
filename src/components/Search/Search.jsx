import { h, Fragment } from 'preact'
import { useState, useContext, useRef } from 'preact/hooks'

import Loading from '/src/components/icons/Loading'
import Body from '/src/components/typography/Body'

import { cardSearch } from '/src/logic/search'
import CardContext from '/src/logic/contexts/card'
import CharacterContext from '/src/logic/contexts/character'
import orNull from '/src/logic/utils/orNull'
import capitalize from '/src/logic/utils/capitalize'

import * as classes from './Search.css'

const Search = () => {
	const { setCardData } = useContext(CardContext)
	const { character } = useContext(CharacterContext)
	const [searchVal, setSearchVal] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	const [hasSearched, setHasSearched] = useState(false)
	const onChange = (e) => setSearchVal(e.target.value)
	const onSubmit = async () => {
		const isFirstSearch = !hasSearched
		setIsLoading(true)
		setHasSearched(true)
		const data = await cardSearch(searchVal, setCardData, isFirstSearch)
		setIsLoading(false)
		if (data.error) {
			console.warn(data.error)
		} else {
			setCardData(data)
		}
		setSearchVal('')
	}
	return (
		<Fragment>
			{orNull(
				!hasSearched,
				<Body>
					Enter the Multiverse ID or name of a Magic the Gathering card to have
					{` ${capitalize(character)} `}
					read the card text!
				</Body>
			)}
			{orNull(
				isLoading,
				<Loading className={classes.loadingIcon} />,
			)}
			<input
				placeholder="Multiverse ID or Card Name"
				value={searchVal}
				onChange={onChange}
				className={classes.searchInput}
				disabled={isLoading}
			/>
			<button
				onClick={onSubmit}
				className={classes.submit}
				disabled={isLoading}
			>
				Submit
			</button>
		</Fragment>
	)
}

export default Search
