import ButtonNextSection from './ButtonNextSection';
import ItemResume from './ItemResume';
import Resume from '../Data/Resume';

function SectionResume() {

	return (
		<div id="resume" className="min-h-screen bg-primary relative overflow-hidden">

			<div className="container px-4 mx-auto pt-[90px] pb-[150px] lg:pt-[150px] lg:pb-[235px]">
				<div className="xl:pl-[200px] grid gap-12">

					{Resume &&
						Resume.map( (section) => (
							<div key={section.id} id={section.id}>
								<h2 className="text-3xl lg:text-5xl mb-[45px] lg:mb-[75px] font-bold uppercase">{section.title}</h2>
								<div className="lg:pl-10">
									{section.items.map( (item) => (
										<ItemResume key={item.id} {...item} />
									))}
								</div>
							</div>
						) )
					}					
				
				</div>
			</div>

			<ButtonNextSection { ...{
				text: 'Mijn skills', 
				textID: 'text-my-skills', 
				bgClass: 'bg-quinary', 
				target: '#skills' } } 
				/>
			
		</div>
	);
}

export default SectionResume;
