import React from "react";

//components
import Heading from "./Heading";
import CaseStudyCard from "./CardStudyCard";

//mui-component
import { Box } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

const CaseStudy = () => {
	return (
		<Box sx={{ p: "1cm" }}>
			<Heading heading="Case Study" />
			<Box sx={{ display: "flex", justifyContent: "center", pt: "15px" }}>
				<img src="../../images/line.png" alt="line" width="311.65px" />
			</Box>
			<Box>
				<Carousel
					sx={{ m: "0cm 3cm" }}
					navButtonsAlwaysVisible
					swipe
					animation="slide"
					indicators={false}
					NextIcon={<ArrowCircleRightIcon sx={{}} />}
					PrevIcon={<ArrowCircleLeftIcon sx={{}} />}
					navButtonsProps={{
						style: {
							borderColor: "#5B9289",
							marginTop: "8cm",
						},
					}}>
					<CaseStudyCard
						heading="DISASTER MITIGATION"
						subHeading="Switching to Clean Energy & Preserving our Abode, Earth."
						desc="Planning and zoning are examples of mitigation actions, as are floodplain protection, property acquisition and relocation, and public outreach projects. Installing disaster warning systems, purchasing radio communications equipment, and conducting emergency response training are examples of preparedness actions. Disaster mitigation is at the heart of emergency management.
"
					/>
					<CaseStudyCard
						heading="DISASTER MITIGATION"
						subHeading="Switching to Clean Energy & Preserving our Abode, Earth."
						desc="Planning and zoning are examples of mitigation actions, as are floodplain protection, property acquisition and relocation, and public outreach projects. Installing disaster warning systems, purchasing radio communications equipment, and conducting emergency response training are examples of preparedness actions. Disaster mitigation is at the heart of emergency management.
"
					/>
				</Carousel>
			</Box>
		</Box>
	);
};

export default CaseStudy;
