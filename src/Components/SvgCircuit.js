import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import circuit from "../Assets/circuit.svg";

function SvgCircuit() {

	const circuitWrapper = useRef();

	useLayoutEffect(() => {
		let ctx = gsap.context(() => {

			let tl = gsap.timeline({repeat: -1, repeatDelay: 0});
			tl.to(".circuit", { autoAlpha: 0.3, duration: 3 } )
			.to(".circuit", { autoAlpha: 1, duration: 3 } );
		
		}, circuitWrapper);
		
		return () => ctx.revert();
	}, []);

	return (
    <div ref={circuitWrapper} id="circuit-wrapper" className="absolute left-0 top-0 w-full h-full overflow-hidden opacity-5 z-10">
		<img className="circuit absolute scale-[3] md:scale-[2] lg:scale-125 w-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" src={circuit} alt="Circuit" />
    </div>
	);
}

export default SvgCircuit;
