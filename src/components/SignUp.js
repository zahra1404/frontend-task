import React from "react";

//mui-components
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

const SignUp = () => {
	return (
		<Grid
			container
			sx={{
				backgroundColor: "#fafafa",
				justifyContent: "center",
				p: "2cm 0cm",
			}}>
			<Grid item md={4} sx={{ m: "2cm" }}>
				<Typography
					sx={{
						fontFamily: "Manrope",
						fontWeight: 600,
						fontSize: "35.6662px",
						lineHeight: "48px",
						color: " #0E0E0E",
					}}>
					Sign Up For Environment News & Alerts
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
					We are bringing worldwide concerns and solutions fresh to
					your emails. As opposed to what others do, we make our
					contributions timely.
				</Typography>
				<TextField
					id="outlined-basic"
					label="Enter your email address"
					variant="outlined"
					style={{ width: "12cm", margin: "20px 0px" }}
				/>
				<Button
					variant="contained"
					sx={{
						backgroundColor: "#146356",
						padding: "13px 33px",
						borderRadius: "3px",
						fontSize: "16px",
						lineHeight: "21px",
						fontFamily: "Manrope",
						color: "#fff",
						m: "0.2cm 0cm",
						textTransform: "capitalize",
						"&:hover": {
							color: "#fff",
							backgroundColor: "#146356",
						},
					}}>
					Subscribe
				</Button>
			</Grid>
			<Grid item md={6}>
				<img
					src="../../images/signUpImg.png"
					width="498.48px"
					height="445.83px"
					alt="img"
				/>
			</Grid>
		</Grid>
	);
};

export default SignUp;
