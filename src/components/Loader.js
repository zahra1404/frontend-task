import React from "react";

//mui-components
import Grid from "@mui/material/Grid";
import LinearProgress from "@mui/material/LinearProgress";
import { Typography } from "@mui/material";

const text = {
	fontFamily: "Manrope",
	fontSize: "11.8887px",
	lineHeight: " 19px",
	letterSpacing: " 0.424597px",
	color: "#FFFFFF",
	mt: "5px",
};
const Loader = ({ value }) => {
	return (
		<>
			<LinearProgress
				variant="determinate"
				value={value}
				color="success"
				sx={{ borderRadius: "3px", height: "8px" }}
			/>
			<Grid container sx={{ justifyContent: "space-between" }}>
				<Grid item>
					<Typography sx={text}>Raised : $10.11 million</Typography>
				</Grid>
				<Grid item>
					<Typography sx={text}>Goal: $23 million</Typography>
				</Grid>
			</Grid>
		</>
	);
};

export default Loader;
