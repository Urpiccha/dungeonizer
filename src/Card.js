import React, { Component } from "react";
import Input from "./components/Input";
import FirstButton from "./components/FirstButton";
import PropTypes from "prop-types";
import { rollD20 } from "./components/Utilities";
import { ElementType } from "./components/Constants";

class Card extends Component {
	render() {
		const { element, onUpdateField, onInitiativeChange, onRemove } = this.props;

		return (
			<div className="card">
				<Input
					label="Name"
					type="text"
					value={element.name}
					onChange={e => onUpdateField(element.id, e, "name")}
					className="wide-input"
				/>
				<Input
					label="Initiative"
					type="number"
					value={element.initiative}
					onChange={e => onInitiativeChange(element.id, e)}
				/>
				<FirstButton
					onClick={() =>
						onInitiativeChange(element.id, { target: { value: rollD20() } })
					}
					label="d20"
				/>

				<Input
					label="Hit Points"
					type="number"
					value={element.hitpoints}
					onChange={e => onUpdateField(element.id, e, "hitpoints")}
				/>
				<FirstButton onClick={() => onRemove(element.id)} label="X" />
			</div>
		);
	}
}

Card.propTypes = {
	element: ElementType,
	onUpdateField: PropTypes.func,
	onInitiativeChange: PropTypes.func,
	onRemove: PropTypes.func
};

export default Card;
