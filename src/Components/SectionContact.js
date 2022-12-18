import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import SvgCircuit from './SvgCircuit'
import space from '../Assets/space.jpg'
import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

function SectionContact() {

	// Animations
	gsap.registerPlugin(ScrollTrigger);
	const contact = useRef();

	useEffect(() => {

		// Animations
		let ctx = gsap.context(() => {
			const contactElement = contact.current;

			gsap.from(".stagger-item", {
				y: 50,
				autoAlpha: 0,
				duration: 0.5,
				stagger: 0.2,
				scrollTrigger: {
					trigger: contactElement,
					start: 'top 25%',
					toggleActions: 'play reverse play reverse',
					markers: false,
				}
			});

		}, contact);

		return () => {
			// Prevent memory leaks
			ctx.revert();
		}
		
	}, []);

	return (
		<div ref={contact} id="contact" className="min-h-screen bg-secondary flex items-center relative overflow-hidden clip-path-inset">
			<img className="fixed w-full h-full left-0 top-0 object-cover object-center opacity-10" src={space} alt="Space" />
			<SvgCircuit />
			<div className="header-gradient absolute left-0 top-0 w-full h-full z-20"></div>

			<div className="container mx-auto px-4 text-center relative z-30">
				<div className="w-full xl:w-3/4 mx-auto">
					<h1 className="stagger-item text-3xl lg:text-5xl mb-2 font-bold uppercase">Let's connect!</h1>
					<p className="stagger-item text-xl lg:text-3xl mb-[15px] lg:mb-[30px]">Voeg me toe op LinkedIn.</p>

					<div className="stagger-item w-1/4 mx-auto mt-5 mb-8 lg:mb-12 h-1 bg-quaternary"></div>

					<div className="stagger-item">
						<a href="https://www.linkedin.com/in/erwin-jongenelen-3239a82a/" target="_blank" className="text-xl lg:text-3xl text-white bg-primary hover:bg-tertiary transition-all shadow-md py-4 px-6 lg:px-8 rounded-lg inline-flex items-center">
							<div className="text-sm lg:text-xl w-[30px] h-[30px] lg:w-[45px] lg:h-[45px] rounded-full flex items-center justify-center block bg-secondary">
								<FontAwesomeIcon icon={faLinkedinIn} />
							</div>
							
							<div className="ml-4">Erwin Jongenelen</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SectionContact;
