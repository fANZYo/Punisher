import React from 'react';

// Styles
import('./index.scss');

const SearchBar = props => {
	return (
		<div className="SearchBar">
			<button className="SearchBar__nav">=</button>

			<div className="SearchBar__search">
				<input type="text" placeholder="Search" />
			</div>

			<button className="SearchBar__filter">U</button>
		</div>
	);
};

export default SearchBar;
