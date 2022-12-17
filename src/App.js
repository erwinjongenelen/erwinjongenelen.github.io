import Sidebar from './Components/Sidebar';
import Socials from './Components/Socials';
import SectionHome from './Components/SectionHome';
import SectionProfile from './Components/SectionProfile';
import SectionResume from './Components/SectionResume';
import SectionSkills from './Components/SectionSkills';
import SectionContact from './Components/SectionContact';

function App() {
	return (
		<div className="App">
			<Sidebar />
			<Socials />

			<div className="lg:mr-[100px]">
				<SectionHome />
				<SectionProfile />
				<SectionResume />
				<SectionSkills />
				<SectionContact />
			</div>
		</div>
	);
}

export default App;
