import React from 'react';
import forest from '../../assets/icons/forest.png';
import {
	AiFillInstagram,
	AiFillFacebook,
	AiFillYoutube,
	AiFillTwitterSquare,
} from 'react-icons/ai';
import './footer.css';

const Footer = () => {
	return (
		<footer>
			<div className="footer-row">
				<div>
					<img src={forest} alt="Forest" className="forest" />
				</div>
				<section className="footer-help-us">
					<h3>Formas de ayudar</h3>
					<ul>
						<li>Voluntariado</li>
						<li>Apadriná</li>
						<li>Colaborá</li>
						<li>Denunciá</li>
					</ul>
				</section>
				<section className="socials">
					<h3>Seguinos</h3>
					<ul>
						<li>
							<a
								href="https://www.instagram.com/"
								target="_blank"
								rel="noreferrer"
							>
								<AiFillInstagram />
							</a>
						</li>
						<li>
							<a
								href="https://www.facebook.com/"
								target="_blank"
								rel="noreferrer"
							>
								<AiFillFacebook />
							</a>
						</li>
						<li>
							<a
								href="https://www.youtube.com/"
								target="_blank"
								rel="noreferrer"
							>
								<AiFillYoutube />
							</a>
						</li>
						<li>
							<a
								href="https://www.twitter.com/"
								target="_blank"
								rel="noreferrer"
							>
								<AiFillTwitterSquare />
							</a>
						</li>
					</ul>
				</section>
			</div>
			<a href="https://github.com/mgmaxi" className="developer">
				Developed by Maximiliano Melani Ghirardi
			</a>
		</footer>
	);
};

export default Footer;
