import React from "react";

//mui-component
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Concerns = () => {
	return (
		<Grid
			container
			sx={{
				p: "2.5cm",
				justifyContent: "space-between",
				backgroundColor: "#FAFAFA",
			}}>
			<Grid item md={6}>
				<img
					src="../../images/concern.png"
					alt="climate-concerns"
					width="611.75px"
					height="343.63px"
				/>
			</Grid>
			<Grid item md={6}>
				<Typography
					sx={{
						fontFamily: "Manrope",
						fontWeight: 700,
						fontSize: "10.1817px",
						lineHeight: "14px",
						letterSpacing: "2.54543px",
						textTransform: "uppercase",
						color: "#146356",
					}}>
					HOW WE WORK
				</Typography>
				<Typography
					sx={{
						fontFamily: "Manrope",
						fontWeight: 600,
						fontSize: "35.6662px",
						lineHeight: "48px",
						color: "#0E0E0E",
						mt: "0.5cm",
					}}>
					Sustainability & Climate Change Concerns
				</Typography>
				<Typography
					sx={{
						fontFamily: "Manrope",
						fontWeight: 500,
						fontSize: "15.2855px",
						lineHeight: "25px",
						letterSpacing: "0.424597px",
						color: "#575757",
						mt: "0.5cm",
					}}>
					Scoping identifies the issues that will be most important
					during the Environment Impact Assessment and eliminates
					those that will be of little concern.
				</Typography>
				<Button
					variant="outlined"
					sx={{
						padding: "13px 33px",
						borderRadius: "3px",
						color: "#146356",
						borderColor: "#146356",
						fontSize: "16px",
						lineHeight: "21px",
						fontFamily: "Manrope",
						fontWeight: 700,
						mt: "1cm",
						"&:hover": {
							color: "#146356",
							borderColor: "#146356",
						},
					}}>
					Get Started
				</Button>
			</Grid>
		</Grid>
	);
};

export default Concerns;
