import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ItemFeature({icon, name, value, valueAppend}) {
	return (
		<div className="item-feature flex flex-wrap items-center">
			<div className="flex-grow-0 flex-shrink-0 w-auto">
				<div className="w-[60px] h-[60px] rounded-full border-2 border-solid border-quaternary flex items-center justify-center text-xl text-quaternary">
					<FontAwesomeIcon icon={icon} />
				</div>
			</div>
			<div className="flex-grow flex-shrink-0 ml-4">
				<p>{name}</p>
				<p><span className="font-bold uppercase">{value}</span> <span>{valueAppend}</span></p>
			</div>
		</div>
	);
}

export default ItemFeature;
