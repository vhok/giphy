import './SearchBar.scss'
import { useState } from "react";
import { useAppContext } from "../../context/appContext";
import { useAsync } from "../../hooks/useAsync";
export const SearchBar = () => {
	const [searchValue, setSearchValue] = useState()
	const {searchImageList, loadImageList} = useAppContext()
	const handleSetSearchValue = (event) => {
		setSearchValue(event.target.value)
	}
	const handleSearchGiphy = async () => {
		/**
		 * Victor: Needed to check if a value exists to decide whether to use loadImageList
		 * for trending or the searchImageList because they use different endpoints.
		 */
		try {
			if(searchValue) {
				await searchImageList({q: searchValue})
			} else {
				await loadImageList()
			}
		} catch(e) {
			// handle error
		}
	}
	const {execute: refreshList} = useAsync({asyncFunction: handleSearchGiphy, immediate:false})

 return <div className='search-bar'>
	 <label for='search'>Search Gifs!</label>
	 <input onChange={handleSetSearchValue} id='search' type={'search'} />
	 <button onClick={refreshList}>Search</button>
 </div>
}