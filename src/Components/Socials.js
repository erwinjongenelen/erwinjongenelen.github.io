import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'

function Socials() {
	return (
		<div className="text-center text-xl fixed top-[15px] lg:top-[20px] left-[10px] lg:left-[20px] z-sidebar">
			<ul>
				<li className="inline-block">
					<a className="block px-2 transition-all text-white lg:opacity-80 hover:opacity-100" href="https://www.linkedin.com/in/erwin-jongenelen-3239a82a/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></a>
				</li>
				<li className="inline-block">
					<a className="block px-2 transition-all text-white lg:opacity-80 hover:opacity-100" href="https://github.com/erwinjongenelen/" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
				</li>
			</ul>
		</div>
	);
}

export default Socials;
