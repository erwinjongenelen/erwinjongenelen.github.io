import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ButtonNextSection from "./ButtonNextSection";
import Skills from "../Data/Skills";
import { useState } from 'react';

function SectionSkills() {

	// Randomize skills
	const shuffledSkills = Skills.sort((a, b) => 0.5 - Math.random());

	// Set skillsData
	const [skills, setSkills] = useState(shuffledSkills);
	const [categories, setCategories] = useState([
		{
			"name": "*",
			"title": "Alle skills",
			"isActive": true
		},
		{
			"name": "programming",
			"title": "Programmeren",
			"isActive": false
		},
		{
			"name": "software",
			"title": "Software",
			"isActive": false
		},
		{
			"name": "soft-skills",
			"title": "Soft skills",
			"isActive": false
		},
		{
			"name": "overig",
			"title": "Overig",
			"isActive": false
		}
	]);

	const colorMap = {
		"programming": "secondary",
		"software": "tertiary",
		"soft-skills": "primary",
		"overig": "quinary",
	};

	// Filter
	const handleFilterClick = (e, name) => {

		// Clear all active states
		setCategories( prevState => ( prevState.map( (item) => ( {...item, isActive: false} ) ) ) );

		// Set current active states
		setCategories( prevState => ( prevState.map( (item) => ( item.name === name ? { ...item, isActive: !item.isActive } : item ) ) ) );

		// Do filtering
		const filter = e.target.getAttribute('data-filter');
		filter === "*" ? setSkills(Skills) : setSkills( Skills.filter( (currentCat) => currentCat.cat === filter ) );
	}

	// Animations
	gsap.registerPlugin(ScrollTrigger);
	const skillsRef = useRef();

	useEffect(() => {

		// Animations
		let ctx = gsap.context(() => {
			const skillsElement = skillsRef.current;

			gsap.from(".skill-item", {
				y: 50,
				autoAlpha: 0,
  				stagger: 0.08,
				duration: 0.2,
				scrollTrigger: {
					trigger: skillsElement,
					start: 'top 75%',
					toggleActions: 'play reset play reset',
					markers: false,
				}
			});

		}, skillsRef);

		return () => {
			// Prevent memory leaks
			ctx.revert();
		}
		
	}, [skills]);

	return (
		<div ref={skillsRef} id="skills" className="relative overflow-hidden min-h-screen bg-quinary">
			<div className="container px-4 mx-auto pt-[90px] pb-[150px] lg:pt-[150px] lg:pb-[235px]">
                <div className="flex flex-wrap justify-center">
					<div className="w-full xl:w-3/4 text-center">
						<h2 className="text-3xl lg:text-5xl mb-[30px] lg:mb-[45px] font-bold uppercase">Mijn favoriete skills</h2>

						<div className="filter-group flex items-center lg:justify-center">
							<span className="mr-2 text-sm lg:text-xl flex-grow-0 flex-shrink-0">Filter op:</span>
							<div className="buttons flex overflow-x-scroll lg:overflow-hidden">
								{categories.map( ({name, title, isActive}) => {
									return <button key={name} data-filter={name} onClick={(e) => handleFilterClick(e, name)} className={`filter-btn ${isActive ? 'is-checked' : ''} mx-1 my-2 lg:m-2 text-xs lg:text-sm flex-grow-0 flex-shrink-0`}>{title}</button>
								} ) }
							 </div>
						</div>

						<div className="w-1/4 mx-auto mt-5 mb-2 lg:mb-12 h-1 bg-quaternary"></div>

						<div className="text-center pt-5">
							{skills.map( ({id, cat, title}) => (
								<span key={id} className={`skill-item ${cat} bg-white m-1 lg:m-2 text-${colorMap[cat]} py-2 px-3 lg:py-3 lg:px-4 shadow-md`}>{title}</span>
							) ) }
						</div>
					</div>
				</div>
            </div>

			<ButtonNextSection { ...{
				text: "Let's connect", 
				textID: 'text-connect', 
				bgClass: 'bg-senary', 
				target: '#contact' } } 
				/>

		</div>
	);
}

export default SectionSkills;
