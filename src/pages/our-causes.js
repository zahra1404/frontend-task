import React from "react";

//mui-components
import Box from "@mui/material/Box";

//components
import SignUp from "../components/SignUp";
import LetsGetInTouch from "../components/LetsGetInTouch";
import ConpulsiveFacts from "../components/ConpulsiveFacts";
import OurStory from "../components/OurStory";
import WordAround from "../components/WordAround";
import HeaderCauses from "../components/HeaderCauses";
import Concerns from "../components/Concerns";
import OurMission from "../components/OurMission";
import MeetTheTeam from "../components/MeetTheTeam";

const OurCauses = () => {
	return (
		<Box>
			<HeaderCauses />
			<OurStory />
			<Concerns />
			<OurMission />
			<MeetTheTeam />
			<LetsGetInTouch />
			<ConpulsiveFacts />
			<WordAround />
			<SignUp
				heading="Interested? Let's get in touch!"
				desc="What looked like a small patch of purple grass, above five feet square, was moving across the sand in their direction."
			/>
		</Box>
	);
};

export default OurCauses;
