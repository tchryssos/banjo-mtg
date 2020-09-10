import { h, Fragment } from 'preact'
import { useState, useContext } from 'preact/hooks'

import { cardSearch } from '/src/logic/search'
import CardContext from '/src/logic/contexts/card'
import ternary from '/src/logic/utils/ternary'

import * as classes from './Search.css'

const Search = () => {
	const { setCardData } = useContext(CardContext)
	const [searchVal, setSearchVal] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	const onChange = (e) => setSearchVal(e.target.value)
	const onSubmit = async () => {
		setIsLoading(true)
		const data = await cardSearch(searchVal)
		setIsLoading(false)
		if (data.error) {
			console.warn(data.error)
		} else {
			setCardData(data)
			setSearchVal('')
		}
	}
	return (
		<Fragment>
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
				{ternary(
					isLoading,
					'Searching...',
					'Submit'
				)}
			</button>
		</Fragment>
	)
}

export default Search
