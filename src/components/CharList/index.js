import React from 'react';

// Styles
import('./index.scss');

class CharList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			list: [],
		};
	}

	componentDidMount() {
		fetch('http://frankenstein.local.com:5000/character/list')
			.then(res => res.json())
			.then(list => {
				this.setState({
					list,
				})
			});
	}

	CharCard = char => (
		<li className="CharList__item" key={char._id}>
			<button className="CharList__button" onClick={this.props.charClickHandler} data-char-id={char.name}>
				<div className="CharList__img">
				</div>
				<div className="CharList__label">
					{char.label}
				</div>
			</button>
		</li>
	);

	render() {
		return (
			<div className="CharList">
				<ul className="CharList__list">
					{this.state.list.map(this.CharCard)}
				</ul>
			</div>
		)
	}
};

export default CharList;
