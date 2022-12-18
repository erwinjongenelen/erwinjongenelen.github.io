import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { faLocationDot, faHourglassHalf, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import ItemFeature from './ItemFeature';
import ButtonNextSection from './ButtonNextSection';

function SectionProfile() {

	gsap.registerPlugin(ScrollTrigger);
	const profile = useRef();
	const feats = useRef();

	useEffect(() => {

		// Animations
		let ctx = gsap.context(() => {
			const featsElement = feats.current;
			const profileElement = profile.current;

			gsap.from(".item-feature", {
				x: 100,
				autoAlpha: 0,
  				stagger: 0.2,
				duration: 0.6,
				scrollTrigger: {
					trigger: featsElement,
					start: 'top 75%',
					end: 'bottom top',
					toggleActions: 'play reverse play reverse',
					markers: false,
				}
			});

			gsap.from(".profile-content-area", {
				y: 200,
				autoAlpha: 0,
  				stagger: 0.1,
				duration: 0.6,
				scrollTrigger: {
					trigger: profileElement,
					start: 'top 75%',
					toggleActions: 'play reverse play reverse',
					markers: false,
				}
			});

		}, profile);

		return () => {
			// Prevent memory leaks
			ctx.revert();
		}
		
	}, []);

	function differenceInHours(date1, date2) {
		let diff = (date2.getTime() - date1.getTime()) / 1000;
		diff /= (60 * 60);
		return Math.abs(Math.round(diff));
	}

	function differenceInYears(date1, date2) {
		return Math.abs(date2.getFullYear() - date1.getFullYear());
	  }

	const hoursLived = differenceInHours( new Date('11/27/1990 00:00'), new Date() );
	const devExperience = differenceInYears( new Date('01/01/2014'), new Date() );

	const features = [
		{
			icon: faLocationDot,
			name: 'Woonplaats',
			value: 'Valkenswaard, NL',
			valueAppend: ''
		},
		{
			icon: faHourglassHalf,
			name: 'Tijd doorgebracht op aarde',
			value: `${hoursLived.toLocaleString('nl-NL')} uur`,
			valueAppend: ``
		},
		{
			icon: faBriefcase,
			name: 'Werkervaring als developer',
			value: `+${devExperience} jaar`,
			valueAppend: ''
		}
	]

	return (
		<div ref={profile} id="profile" className="relative overflow-hidden min-h-screen bg-secondary">
			<div className="container px-4 mx-auto pt-[90px] pb-[150px] lg:pt-[150px] lg:pb-[235px]">
                <div className="grid gap-4 xl:gap-7 grid-cols-12">
					<div className="col-span-12 xl:col-span-6">
						<blockquote className="profile-content-area pl-4 border-l-[3px] border-solid border-quaternary text-xl md:text-2xl leading-normal mb-8 lg:mb-12">
							Mijn naam is <strong>Erwin Jongenelen</strong>. <br/>
							Ik ben een gepassioneerde webdeveloper met een goede kennis van frontend en backend.
						</blockquote>
					</div>
				</div>
				<div className="grid gap-4 xl:gap-7 grid-cols-12">
					<div className="col-span-12 xl:col-span-7">
						<div className="profile-content-area text-md leading-relaxed">
							<p className="mb-8">Mijn vrienden en collega's zouden mij omschrijven als een analytische, perfectionistische en pragmatische probleemoplosser met een enorme drive om te blijven leren en mijn kennis te verbreden. In mijn vrije tijd leer ik graag meer over onderwerpen die ik interessant vind. Zo heb ik bijvoorbeeld geleerd om webapplicaties te ontwikkelen met React en Tailwind, en website elementen te animeren met GSAP. Daarnaast houd ik van gamen op consoles, speel ik (bas)gitaar en bezoek ik maar al te graag een gaaf concert.</p>
							<p className="mb-8">Ik word immens gelukkig van het maken van uitdagende projecten in een leuk en informeel team. Met het maken van custom oplossingen, het verdiepen in diverse webtechnieken, en het contact hebben met klanten en collega's houd ik mezelf up-to-date als webdeveloper en werknemer.</p>
							<p className="mb-0">Door de jaren heen ben ik werkzaam geweest bij verschillende werkgevers waarbij ik ervaring heb opgedaan in het bedrijfsleven en het ontwikkelen voor het web. </p>
						</div>
					</div>
					<div className="col-span-12 xl:col-span-1"></div>
					<div className="col-span-12 xl:col-span-4">
						
						<div ref={feats} className="grid gap-7">
							{ features.map((feature) => ( 
								<ItemFeature key={feature.name} {...feature} />
							))}
						</div>

					</div>
				</div>
            </div>

			<ButtonNextSection { ...{
				text: 'Mijn CV', 
				textID: 'text-my-experience', 
				bgClass: 'bg-primary', 
				target: '#resume' } } 
				/>

		</div>
	);
}

export default SectionProfile;
