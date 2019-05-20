import React from 'react';

// Styles
import('./index.scss');

class CharList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			move: undefined,
		};
	}

	componentDidMount() {
		fetch(`http://frankenstein.local.com:5000/character/${this.props.charId}?cmd=${this.props.cmd}&exact=true`)
			.then(res => res.json())
			.then(move => {
				this.setState({
					move,
				})
			});
	}

	render() {
		console.log(this.state.move)
		return this.state.move ? (
			<div className="MoveDetails">
				{Object.entries(this.state.move).map(([key, value], i) => (
					<div key={i}>{key}: {value}</div>
				))}
			</div>
		) : null
	}
};

export default CharList;
