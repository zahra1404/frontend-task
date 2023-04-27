import React from "react";

//mui-components
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

const Companies = () => {
	return (
		<>
			<Grid container sx={{ justifyContent: "center" }}>
				<Grid item md={4} sx={{ m: "2cm" }}>
					<Typography
						sx={{
							fontFamily: "Manrope",
							fontWeight: 600,
							fontSize: "27.1742px",
							lineHeight: "36px",
							color: "#0E0E0E",
						}}>
						The Environment is All We Have In Common
					</Typography>
					<Typography
						sx={{
							fontFamily: "Manrope",
							fontWeight: 500,
							fontSize: "15.2855px",
							lineHeight: "25px",
							letterSpacing: "0.424597px",
							color: "#575757",
						}}>
						Turning the ship around takes a lot of willpower and
						ingenuity.
					</Typography>
				</Grid>
				<Grid item md={6}>
					<img
						src="../../images/companies.png"
						alt="companies"
						width="518.96px"
						height="217.39px"
					/>
				</Grid>
			</Grid>
		</>
	);
};

export default Companies;
