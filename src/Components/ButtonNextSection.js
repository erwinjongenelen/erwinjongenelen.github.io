import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

function ButtonNextSection({text, textID, bgClass, target}) {

	gsap.registerPlugin(ScrollTrigger);
	const nextButton = useRef();

	useEffect(() => {

		// Animations
		let ctx = gsap.context(() => {
			const nextButtonElement = nextButton.current;

			gsap.to(`#${textID}`, { 
				autoAlpha: 1, 
				scale: 1.5, 
				y: -15, 
				duration: 1,
				scrollTrigger: {
					trigger: nextButtonElement,
					start: 'top 75%',
					end: 'bottom top',
					scrub: 1,
					anticipatePin: 1,
					markers: false,
				}
			});

		}, nextButton);

		return () => {
			// Prevent memory leaks
			ctx.revert();
		}
		
	}, []);

	return (
		<div ref={nextButton} className="absolute w-full bottom-0 left-0 right-0 text-center z-30 h-[59px] lg:h-[63px]">
			<p id={textID} className="text-sm w-full text-center absolute bottom-[75px] lg:bottom-[100px] opacity-30 z-30">{text}</p>
			<a href={target} className="relative mx-auto text-lg lg:text-2xl transition-all py-4 inline-block">
				<div className={`absolute w-[90px] h-[90px] bottom-[-45px] lg:w-[120px] lg:h-[120px] lg:bottom-[-60px] ${bgClass} left-1/2 -translate-x-1/2 -rotate-45`}></div>
				<FontAwesomeIcon className='z-10 relative' icon={faAngleDown} />
			</a>
		</div>
	);
}

export default ButtonNextSection;