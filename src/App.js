import React, { Component } from "react";
import "./App.css";
import store from "store2";
import { randomId, updateListElement } from "./components/Utilities";
import { rollD20 } from "./components/Utilities";
import { initialState } from "./components/Constants";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";

class App extends Component {
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
		return (
			<div>
				<BrowserRouter>
					<Router />
				</BrowserRouter>
			</div>
		);
	}
}
export default App;
