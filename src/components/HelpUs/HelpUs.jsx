import React from 'react';
import HelpUsItem from '../HelpUsItem/HelpUsItem';
import dog from '../../assets/icons/dog.png';
import cat from '../../assets/icons/cat.png';
import footprintsRed from '../../assets/icons/footprints-red.png';
import shelter from '../../assets/icons/shelter.png';
import './helpUs.css';

const HelpUs = () => {
	return (
		<div className="help-us">
			<HelpUsItem
				image={dog}
				title={'Quiero adoptar'}
				text={'Conocé al nuevo miembro de tu familia'}
			/>
			<HelpUsItem
				image={cat}
				title={'Quiero apadrinar'}
				text={'Hazte amigo de uno de nuestros refugiados'}
			/>
			<HelpUsItem
				image={footprintsRed}
				title={'Quiero ser voluntario'}
				text={'Sé parte de nuestra causa y ayuda a los animales vulnerados'}
			/>
			<HelpUsItem
				image={shelter}
				title={'Quiero donar'}
				text={'Ayúdanos a financiar el bienestar de nuestros rescatados'}
			/>
		</div>
	);
};

export default HelpUs;
