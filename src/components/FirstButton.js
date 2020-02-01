import React from "react";
import PropTypes from "prop-types";

const FirstButton = ({ className, label, onClick }) => (
	<button onClick={onClick} className={className}>
		{label}
	</button>
);

FirstButton.propTypes = {
	className: PropTypes.string,
	label: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired
};

export default FirstButton;
