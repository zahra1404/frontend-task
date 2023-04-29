import { BrowserRouter, Routes, Route } from "react-router-dom";

//mui-components
import Box from "@mui/material/Box";

//components
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";

import OurCauses from "./pages/our-causes";
import Home from "./pages/home";

function App() {
	return (
		<Box>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/our-causes" element={<OurCauses />} />
				</Routes>
			</BrowserRouter>

			<Footer />
		</Box>
	);
}

export default App;
