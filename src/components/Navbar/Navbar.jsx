import React from 'react';
import './navbar.css';
import '../../assets/images/logo.png';
import logo from '../../assets/images/logo.png';

const Navbar = () => {
	return (
		<div className="logo-container">
			<img src={logo} alt="Logo" className="logo" />
		</div>
	);
};

export default Navbar;
