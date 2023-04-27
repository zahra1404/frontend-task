import React from "react";

//components
import Heading from "./Heading";

//mui-components
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

//data
import projectAssistanceProgram from "../data/projectAssistanceProgram";

const ProjectAssistanceProgram = () => {
	return (
		<>
			<Box sx={{ p: "1cm 0cm", backgroundColor: "#FAFAFA" }}>
				<Heading heading="Our Continued Project" />
				<Heading heading="Assistance Programs" />
				<Grid container sx={{ p: "0cm 2cm", justifyContent: "center" }}>
					{projectAssistanceProgram.map((program, index) => (
						<Grid item md={3.3} key={index} sx={{ p: "0cm 0.5cm" }}>
							<img
								src={program.img}
								alt="logo"
								width="68px"
								height="68px"
								style={{ marginTop: "1.5cm" }}
							/>
							<Typography
								sx={{
									fontFamily: "Manrope",
									fontWeight: 600,
									fontSize: "20.3807px",
									lineHeight: "27px",
									letterSpacing: "0.254758px",
									color: "#0E0E0E",
									mt: "0.5cm",
								}}>
								{program.heading}
							</Typography>
							<Typography
								sx={{
									pr: "30px",
									textAlign: "justify",
									mt: "0.3cm",
									fontFamily: "Manrope",
									fontWeight: 500,
									fontSize: "15.2855px",
									lineHeight: "25px",
									letterSpacing: " 0.424597px",
									color: "#0E0E0E",
								}}>
								{program.desc}
							</Typography>
						</Grid>
					))}
				</Grid>
			</Box>
		</>
	);
};

export default ProjectAssistanceProgram;
