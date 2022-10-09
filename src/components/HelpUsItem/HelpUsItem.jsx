import React from 'react';
import './helpUsItem.css';

const HelpUsItem = ({ image, title, text }) => {
	return (
		<section className="help-us-item">
			<img src={image} alt={title} />
			<h3>{title}</h3>
			<p>{text}</p>
		</section>
	);
};

export default HelpUsItem;
