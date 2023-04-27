//mui-components
import Box from "@mui/material/Box";

//components
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ProjectAssistanceProgram from "./components/ProjectAssistanceProgram";
import Progress from "./components/Progress";
import GetInTouch from "./components/GetInTouch";
import OurBefactors from "./components/OurBefactors";
import Companies from "./components/Companies";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";

function App() {
	return (
		<Box>
			<Navbar />
			<Header />
			<ProjectAssistanceProgram />
			<Progress />
			<GetInTouch />
			<OurBefactors />
			<Companies />
			<SignUp />
			<Footer />
		</Box>
	);
}

export default App;
