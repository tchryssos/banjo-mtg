import { h, Fragment } from 'preact'
import { useState, useContext } from 'preact/hooks'

import { cardSearch } from '/src/logic/search'
import CardContext from '/src/logic/contexts/card'

import * as classes from './Search.css'

const Search = () => {
	const { setCardData } = useContext(CardContext)
	const [searchVal, setSearchVal] = useState('')
	const onChange = (e) => setSearchVal(e.target.value)
	const onSubmit = async () => {
		const data = await cardSearch(searchVal)
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
			/>
			<button
				onClick={onSubmit}
				className={classes.submit}
			>
				Submit
			</button>
		</Fragment>
	)
}

export default Search
