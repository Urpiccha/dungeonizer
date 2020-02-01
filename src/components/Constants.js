import { randomId, rollD20 } from "./Utilities";
import PropTypes from "prop-types";

export const initialState = [
	{
		id: randomId(),
		name: "Player 1",
		initiative: rollD20(),
		hitpoints: 40
	},
	{
		id: randomId(),
		name: "Player 2",
		initiative: rollD20(),
		hitpoints: 56
	},
	{
		id: randomId(),
		name: "Player 3",
		initiative: rollD20(),
		hitpoints: 21
	},
	{
		id: randomId(),
		name: "Player 4",
		initiative: rollD20(),
		hitpoints: 7
	}
];

export const ElementType = PropTypes.shape({
	id: PropTypes.number,
	name: PropTypes.string,
	hitpoints: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	initiative: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
});
