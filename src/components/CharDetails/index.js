import React from 'react';

// Styles
import('./index.scss');

const MoveDetails = React.lazy(() => import(/* webpackChunkName: "[movedetails]"*/'../MoveDetails'));

class CharList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			move: undefined,
			movelist: [],
		};
	}

	componentDidMount() {
		fetch(`http://frankenstein.local.com:5000/character/${this.props.charId}`)
			.then(res => res.json())
			.then(movelist => {
				this.setState({
					movelist,
				})
			});
	}

	moveClickHandler = e => {
		this.setState({
			move: e.currentTarget.dataset.cmd,
		});
	};

	MoveItem = (move, i) => (
		<li className="CharDetails__item" key={i}>
			<button className="CharDetails__button" onClick={this.moveClickHandler} data-cmd={move.cmd}>
				{move.cmd}
			</button>
		</li>
	);

	render() {
		return this.state.move
			? <MoveDetails charId={this.props.charId} cmd={this.state.move} />
			: (
				<div className="CharDetails">
					<h1>{this.props.charLabel}</h1>
					<ul className="CharDetails__list">
						{this.state.movelist.map(this.MoveItem)}
					</ul>
				</div>
			)
	}
};

export default CharList;
