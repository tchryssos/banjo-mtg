import { h, Fragment } from 'preact'
import { useState, useContext } from 'preact/hooks'

import Loading from '/src/components/icons/Loading'

import { cardSearch } from '/src/logic/search'
import CardContext from '/src/logic/contexts/card'
import orNull from '/src/logic/utils/orNull'

import * as classes from './Search.css'

const Search = () => {
	const { setCardData } = useContext(CardContext)
	const [searchVal, setSearchVal] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	const onChange = (e) => setSearchVal(e.target.value)
	const onSubmit = async () => {
		setIsLoading(true)
		const data = await cardSearch(searchVal, setCardData)
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
			{orNull(
				isLoading,
				<Loading className={classes.loadingIcon} />,
			)}
		</Fragment>
	)
}

export default Search
