import React from "react";

//mui-component
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Heading from "./Heading";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

//components
import Loader from "./Loader";

//data
import ourMission from "../data/ourMission";

const text = {
	fontFamily: "Manrope",
	fontSize: "11.8887px",
	lineHeight: " 19px",
	letterSpacing: " 0.424597px",
	color: "#000",
};

const OurMission = () => {
	const progressValue = 67;
	return (
		<Box sx={{ p: "2cm" }}>
			<Typography
				sx={{
					fontFamily: "Manrope",
					fontWeight: 700,
					fontSize: "10.1817px",
					lineHeight: "14px",
					letterSpacing: "2.54543px",
					textTransform: "uppercase",
					color: "#146356",
					textAlign: "center",
					mb: "10px",
				}}>
				Our Mission
			</Typography>
			<Heading heading="Our Green Wonders" />
			<Box sx={{ display: "flex", justifyContent: "center", pt: "15px" }}>
				<img src="../../images/line.png" alt="line" width="311.65px" />
			</Box>
			<Grid container sx={{ p: "1cm", justifyContent: "center" }}>
				{ourMission.map((m, i) => (
					<Grid item md={3.5} sx={{ m: "0cm " }}>
						<Card sx={{ maxWidth: 322 }}>
							<CardActionArea>
								<CardMedia
									component="img"
									height="182.48px"
									image={m.img}
									alt="out-mission"
								/>
								<CardContent>
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
										{m.heading}
									</Typography>
									<Typography
										sx={{
											fontFamily: "Manrope",
											fontWeight: 600,
											fontSize: "21.5px",
											lineHeight: "27px",
											letterSpacing: " 0.424597px",
											color: "#0E0E0E",
											mt: "10px",
										}}>
										{m.subHeading}
									</Typography>
									<Typography
										sx={{
											fontFamily: "Manrope",
											fontWeight: 500,
											fontSize: "15.2855px",
											lineHeight: "25px",
											letterSpacing: " 0.424597px",
											color: "#575757",
											mt: "20px",
										}}>
										{m.desc}
									</Typography>
									<Typography
										sx={{
											color: "#A3DA8D",
											fontSize: "11px",
											fontFamily: "Manrope",
											m: "0.5cm 0cm 0cm 5cm",
										}}>{`${progressValue}%`}</Typography>
									<Loader value={progressValue} />
									<Grid
										container
										sx={{
											justifyContent: "space-between",
										}}>
										<Grid item>
											<Typography sx={text}>
												Raised : $10.11 million
											</Typography>
										</Grid>
										<Grid item>
											<Typography sx={text}>
												Goal: $23 million
											</Typography>
										</Grid>
									</Grid>
								</CardContent>
							</CardActionArea>
						</Card>
					</Grid>
				))}
			</Grid>
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
						m: "1cm 0cm",
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

export default OurMission;
