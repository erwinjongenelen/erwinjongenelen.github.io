import ButtonNextSection from './ButtonNextSection';
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Typed from 'typed.js';
import space from '../Assets/space.jpg';
import profileImg from '../Assets/erwin.jpg'
import SvgCircuit from './SvgCircuit';

function SectionHome() {

	gsap.registerPlugin(ScrollTrigger);
	const home = useRef();
	const functionText = useRef();
	const typed = useRef();

	useEffect(() => {

		// Animations
		let ctx = gsap.context(() => {
			const homeElement = home.current;

			const tl = gsap.timeline();
			tl.to('#home-avatar', { y: 230, scale: 0.75, autoAlpha: 0, duration: 1 } )
			.to('#home-avatar img', { scale: 1.4, duration: 1 }, '-=1' )
			.to('#home-intro', { autoAlpha: 0, y: 150, scale: 0.9, duration: 0.8 }, '-=1')
			.to('#home-function', { autoAlpha: 0, y: 115, scale: 0.9, duration: 0.6 }, '-=1')
			.to('#circuit-wrapper', { scale: 1.1, autoAlpha: 0.05, duration: 1 }, '-=1');

			ScrollTrigger.create({
				animation: tl,
				trigger: homeElement,
				start: '+=50 top',
				end: 'bottom center',
				scrub: 1,
				anticipatePin: 1,
				markers: false,
			});
		}, home);

		// Typed
		const options = {
			strings: ['Frontend', 'Lead', 'Javascript', 'PHP', 'Leergierige', 'React', 'WordPress', 'Ambitieuze', 'Web'],
			typeSpeed: 60,
			backSpeed: 30,
			backDelay: 3000,
			cursorChar: '|',
			shuffle: false,
			smartBackspace: false,
			loop: true
		}

		typed.current = new Typed(functionText.current, options);

		return () => {
			// Prevent memory leaks
			ctx.revert();
			typed.current.destroy();
		}
		
	}, []);

	return (
		<div ref={home} id="home" className="min-h-screen bg-primary flex items-center relative overflow-hidden clip-path-inset">
			<img className="fixed w-full h-full left-0 top-0 object-cover object-center opacity-10" src={space} alt="Space" />
			<SvgCircuit />

			<div className="header-gradient absolute left-0 top-0 w-full h-full z-20"></div>

			<div className="container mx-auto text-center relative z-30">
				<div id="home-avatar" className="w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] mx-auto bg-gradient-to-t from-quinary to-tertiary rounded-full w-full h-full p-2 left-0 top-0 shadow-xl">
					<div className="bg-gradient-to-t from-gray-300 to-white rounded-full w-fulll h-full overflow-hidden relative">
						<img className="absolute left-0 top-0 w-full h-full" src={profileImg} alt="Avatar" />
					</div>
				</div>
				<h1 id="home-intro" className="mt-6 text-lg lg:text-2xl text-gray-300">Hallo, ik ben <span className="font-bold text-tertiary">Erwin Jongenelen</span></h1>
				<div id="home-function" className="flex lg:mt-4 text-xl lg:text-4xl justify-center">
					<div ref={functionText} className="text-right font-bold uppercase tracking-widest text-quaternary"></div>
					<div className="text-left uppercase tracking-widest">Developer</div>		
				</div>
			</div>
			
			<ButtonNextSection { ...{
				text: 'Meer over mij', 
				textID: 'text-more-about-me', 
				bgClass: 'bg-secondary', 
				target: '#profile' } } 
				/>

		</div>
	);
}

export default SectionHome;
