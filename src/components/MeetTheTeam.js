import React from "react";

//mui-components
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const name = {
	fontFamily: "Manrope",
	fontWeight: 600,
	fontSize: "16.9695px",
	lineHeight: "23px",
	letterSpacing: "0.254543px",
	color: "#F3EADA",
	mt: "20px",
};
const designation = {
	fontFamily: "Manrope",
	fontWeight: 600,
	fontSize: "11.8787px",
	lineHeight: "19px",
	letterSpacing: "0.424238px",
	color: "#5B9289",
};
const MeetTheTeam = () => {
	return (
		<Grid container sx={{ p: "2cm", backgroundColor: "#146356" }}>
			<Grid item md={2.4} sx={{ mt: "2cm" }}>
				<Typography
					sx={{
						fontFamily: "Manrope",
						fontWeight: 600,
						fontSize: "27.1512px",
						lineHeight: "36px",
						color: " #F3EADA",
					}}>
					Meet our Helping Hands
				</Typography>
				<Typography
					sx={{
						fontFamily: "Manrope",
						fontWeight: 500,
						fontSize: "15.2726px",
						lineHeight: "25px",
						letterSpacing: "0.424238px",
						color: "#B9D1CD",
						mt: "20px",
					}}>
					They do not behave like waves, they do not behave like
					particles, they do not behave like clouds....
				</Typography>
			</Grid>
			<Grid item md={2.4} sx={{ ml: "4cm" }}>
				<img
					src="../../images/watts.png"
					alt="watts"
					width="300px"
					height="350px"
				/>
				<Typography sx={name}>Crystal Logan</Typography>
				<Typography sx={designation}>
					Project Management Specialist
				</Typography>
			</Grid>
			<Grid item md={2.4} sx={{ ml: "1cm" }}>
				<img
					src="../../images/stewart.png"
					alt="watts"
					width="300px"
					height="350px"
				/>
				<Typography sx={name}>Esther Howard</Typography>
				<Typography sx={designation}>Frontend Developer</Typography>
			</Grid>
			<Grid item md={2.4} sx={{ ml: "1cm" }}>
				<img
					src="../../images/mijia.png"
					alt="watts"
					width="300px"
					height="350px"
				/>
				<Typography sx={name}>Ted Horton</Typography>
				<Typography sx={designation}>Gaming Director</Typography>
			</Grid>
		</Grid>
	);
};

export default MeetTheTeam;
