import React from "react";

//mui-components
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

const LetsGetInTouch = () => {
	return (
		<Box
			sx={{
				backgroundColor: "#FAFAFA",
				p: "2cm",
				display: "flex",
				justifyContent: "center",
				flexDirection: "column",
			}}>
			<Typography
				sx={{
					fontFamily: "Manrope",
					fontWeight: 600,
					fontSize: "35.6662px",
					lineHeight: "48px",
					color: " #0E0E0E",
					textAlign: "center",
				}}>
				Interested? Let's get in touch!
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
					textAlign: "center",
				}}>
				What looked like a small patch of purple grass, above five feet
				square, was moving across the sand in their direction.
			</Typography>
			<Box sx={{ display: "flex", justifyContent: "center" }}>
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
						m: "1cm",
						textTransform: "capitalize",
						"&:hover": {
							color: "#fff",
							backgroundColor: "#146356",
						},
					}}>
					Get Started
				</Button>
			</Box>
		</Box>
	);
};

export default LetsGetInTouch;
