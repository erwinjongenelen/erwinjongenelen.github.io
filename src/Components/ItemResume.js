import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function ItemResume({name, company, labelText, labelBg, text}) {

	gsap.registerPlugin(ScrollTrigger);
	const resumeItem = useRef();

	useEffect(() => {

		// Animations
		let ctx = gsap.context(() => {
			const resumeItemElement = resumeItem.current;

			gsap.to(resumeItemElement, {
				autoAlpha: 1,
				duration: 0.5,
				scrollTrigger: {
					trigger: resumeItemElement,
					start: 'top 90%',
					end: 'top 90%',
					toggleActions: 'play play reverse reverse',
					markers: false,
				}
			});

			gsap.from('.resume-content', {
				autoAlpha: 0,
				y: 50,
				duration: 0.5,
				scrollTrigger: {
					trigger: resumeItemElement,
					start: 'top 90%',
					end: '50% 90%',
					toggleActions: 'play play reverse reverse',
					markers: false,
				}
			});

			gsap.to(".dot-fill", {
				scale: 1,
				autoAlpha: 1,
				duration: 0.5,
				scrollTrigger: {
					trigger: resumeItemElement,
					start: 'top 90%',
					end: '50% 90%',
					toggleActions: 'play play reverse reverse',
					markers: false,
				}
			});

			gsap.to(".progress", {
				height: '100%',
				scrollTrigger: {
					trigger: resumeItemElement,
					start: 'top 90%',
					end: '50% 90%',
					toggleActions: 'play play reverse reverse',
					markers: false,
				}
			});

		}, resumeItem);

		return () => {
			// Prevent memory leaks
			ctx.revert();
		}
		
	}, []);

	return (
		<div ref={resumeItem} className="resume-item opacity-25 grid gap-4 xl:gap-7 grid-cols-12 mt-[-9px]">
			<div className="col-span-2 sm:col-span-1">

				<div className="timeline-wrap relative w-[22px] h-full mx-auto flex flex-col">
					<div className="dot-wrap relative mt-2 flex items-center justify-center z-10">
						<div className="w-[22px] h-[22px] flex items-center justify-center">
							<div className="border-2 border-solid border-white w-[20px] h-[20px] rounded-full"></div>
						</div>
						<div className="dot-fill absolute rounded-full w-full h-full scale-0 opacity-0 bg-tertiary"></div>
					</div>
					<div className="track-wrapper flex-grow relative mt-[-1px]">
						<div className="track absolute left-0 right-0 top-0 mx-auto w-[2px] h-full bg-white"></div>
						<div className="progress absolute left-0 right-0 top-0 mx-auto w-[4px] bg-tertiary z-10"></div>
					</div>
				</div>

			</div>
			<div className="resume-content col-span-10 sm:col-span-11 xl:col-span-9">

				<div className="item-feature md:flex md:flex-wrap items-center mb-7">
					<div className="flex-grow flex-shrink-0">
						<h3 className="text-xl lg:text-3xl font-bold">{name}</h3>
						<p className="text-md lg:text-2xl text-tertiary">{company}</p>
					</div>
					<div className="flex-grow-0 flex-shrink-0 w-auto">
						<div className={`bg-${labelBg} relative uppercase font-bold py-3 px-4 inline-block mt-2 md:mt-0 rounded-lg text-xs lg:text-sm`}>
							<div className={`bg-${labelBg} w-[14px] h-[14px] rounded-sm absolute left-[-5px] top-1/2 -translate-y-1/2 origin-center -rotate-45 hidden md:block`}></div>
							{labelText}
						</div>
					</div>
				</div>
				
				<div className="text-gray-400 pb-[45px] lg:pb-[75px]">
					{text}
				</div>
			</div>
		</div>
	);
}

export default ItemResume;
