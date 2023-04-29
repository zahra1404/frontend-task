import React from "react";

import Header from "../components/Header";
import ProjectAssistanceProgram from "../components/ProjectAssistanceProgram";
import Progress from "../components/Progress";
import GetInTouch from "../components/GetInTouch";
import OurBefactors from "../components/OurBefactors";
import Companies from "../components/Companies";
import SignUp from "../components/SignUp";
import Card from "../components/Card";
import Reviews from "../components/Reviews";
import CaseStudy from "../components/CaseStudy";

//mui-components
import Box from "@mui/material/Box";

const Home = () => {
	return (
		<Box>
			<Header />
			<ProjectAssistanceProgram />
			<Progress />
			<Card />
			<GetInTouch />
			<OurBefactors />
			<CaseStudy />
			<Reviews />
			<Companies />
			<SignUp
				heading="Sign Up For Environment News & Alerts"
				desc="We are bringing worldwide concerns and solutions fresh to your emails. As opposed to what others do, we make our contributions timely."
			/>
		</Box>
	);
};

export default Home;
