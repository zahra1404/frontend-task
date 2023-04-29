import React from "react";

//mui-components
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

//data
import progress from "../data/progress";

const Progress = () => {
	return (
		<Grid container sx={{ justifyContent: "center", p: "2cm" }}>
			{progress.map((progress, index) => (
				<Grid item key={index} md={3}>
					<img
						src={progress.img}
						alt="img"
						width="119.74px"
						height="119.74px"
						style={{ alignItems: "center", margin: "0cm 3.2cm" }}
					/>
					<Typography
						sx={{
							fontFamily: "Manrope",
							fontWeight: 700,
							fontSize: "64.5388px",
							lineHeight: "86px",
							textAlign: " center",
							color: "#146356",
						}}>
						{progress.number}
					</Typography>
					<Typography
						sx={{
							fontFamily: "Manrope",
							fontWeight: 600,
							fontSize: "20.3807px",
							lineHeight: "27px",
							textAlign: "center",
							letterSpacing: "0.254758px",
							color: "#0E0E0E",
						}}>
						{progress.text}
					</Typography>
				</Grid>
			))}
		</Grid>
	);
};

export default Progress;
