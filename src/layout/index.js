import React from 'react';

// Styles
import './index.scss';

// Components
import SearchBar from '../components/SearchBar';

const Layout = props => {
	return (
		<div className="Layout">
			<SearchBar onSearch={props.searchHanlder} />

			{props.children}
		</div>
	);
}

export default Layout;
