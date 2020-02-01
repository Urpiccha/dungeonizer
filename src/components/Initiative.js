import React, { Component } from "react";
import Card from "../Card";
import store from "store2";
import { randomId, updateListElement } from "./Utilities";
import FirstButton from "./FirstButton";
import { rollD20 } from "./Utilities";
import { initialState } from "./Constants";
import FlipMove from "react-flip-move";
import Button from "@material-ui/core/Button";

class Initiative extends Component {
	constructor(props) {
		super(props);
		this.state = {
			elements: initialState
		};
	}

	componentDidMount() {
		const storeData = store.get("dnd-data");
		if (storeData) {
			this.setState(storeData);
		} else {
			this.setState({ elements: initialState });
		}
	}
	syncStateWithLocalStore = () => {
		store.set("dnd-data", this.state);
	};

	updateField = (id, e, field) => {
		const { value } = e.target;
		this.setState({
			elements: updateListElement(this.state.elements, id, field, value)
		});
		this.syncStateWithLocalStore();
	};

	updateInitiative = (id, e) => {
		clearTimeout(this.timeout_);
		this.updateField(id, e, "initiative");
		this.timeout_ = setTimeout(() => this.sortElements(), 800);
		this.syncStateWithLocalStore();
	};

	sortElements = () => {
		const { elements } = this.state;
		this.setState({
			elements: elements.sort((l, r) => r.initiative - l.initiative)
		});
		this.syncStateWithLocalStore();
	};

	addCard = () => {
		const { elements } = this.state;
		elements[elements.length] = {
			id: randomId(),
			name: `Player ${elements.length + 1}`,
			initiative: rollD20(),
			hitpoints: 12
		};
		this.setState({
			elements: elements.sort((l, r) => r.initiative - l.initiative)
		});
		this.syncStateWithLocalStore();
	};

	removeElement = id => {
		let { elements } = this.state;
		elements = elements.filter(el => el.id !== id);
		this.setState({ elements });
		this.syncStateWithLocalStore();
	};

	render() {
		const { elements } = this.state;
		return (
			<div>
				<div className="header">
					<FirstButton onClick={this.addCard} label="Add New Card" />
				</div>
				<FlipMove
					duration={300}
					delay={0}
					staggerDurationBy={260}
					staggerDelayBy={0}
					easing="cubic-bezier(0.13, 1.15, 0.8, 1.5)"
					appearAnimation="elevator"
				>
					{elements.map(element => (
						<Card
							key={element.id}
							element={element}
							onUpdateField={this.updateField}
							onInitiativeChange={this.updateInitiative}
							onRemove={this.removeElement}
						/>
					))}
				</FlipMove>
				<div className btn-box>
					<Button variant="contained" color="primary" href="/">
						Home
					</Button>
					<Button variant="contained" color="primary" href="/dungeonizer">
						Roll A Dungeon!
					</Button>
					<Button variant="contained" color="primary" href="/monsters">
						Roll Some Monsters!
					</Button>
				</div>
			</div>
		);
	}
}
export default Initiative;
