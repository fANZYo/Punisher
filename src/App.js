import React, { Component, Suspense } from 'react';

// Styles
import './App.scss';

// Components
import Layout from './layout';
const CharList = React.lazy(() => import(/* webpackChunkName: "[charlist]" */'./components/CharList'));
const CharDetails = React.lazy(() => import(/* webpackChunkName: "[chardetails]"*/'./components/CharDetails'));

class App extends Component {
	constructor() {
		super();

		this.state = {
			charId: '',
		};
	}

	charClickHandler = e => {
		this.setState({
			charId: e.currentTarget.dataset.charId,
		});
	};

	render() {
		return (
			<Layout>
				<Suspense fallback={<div>...Loading</div>}>
					{this.state.charId
						? <CharDetails charLabel={this.state.charLabel} charId={this.state.charId} />
						: <CharList charClickHandler={this.charClickHandler} />
					}
				</Suspense>
			</Layout>
		);
	}
};

export default App;
