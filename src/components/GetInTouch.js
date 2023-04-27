import React from "react";

//mui-components
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";

const GetInTouch = () => {
	return (
		<>
			<Grid container sx={{ backgroundColor: "#fafafa" }}>
				<Grid item>
					<img
						src="../../images/getInTouch.png"
						alt="getInTouch"
						width="631px"
						height="533px"
					/>
				</Grid>
				<Grid item sx={{ p: "2cm 3cm" }}>
					<Typography
						sx={{
							fontFamily: "Manrope",
							fontWeight: 600,
							fontSize: " 35.6662px",
							lineHeight: "48px",
							color: "#0E0E0E",
							width: "12cm",
						}}>
						Take Action. Let's Get In Touch
					</Typography>
					<Typography
						sx={{
							fontFamily: "Manrope",
							fontWeight: 600,
							fontSize: " 15.2655px",
							lineHeight: "25px",
							color: "#575757",
							width: "12cm",
							mt: "20px",
							letterSpacing: "0.424597px",
						}}>
						Given the limited resources, the issues we address, from
						hunger & clean drinking water to disease prevention and
						homelessness, can be taxing.
					</Typography>
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
							m: "1cm 0cm",
							"&:hover": {
								color: "#fff",
								backgroundColor: "#146356",
							},
						}}>
						Donate Now
					</Button>
				</Grid>
			</Grid>
		</>
	);
};

export default GetInTouch;
