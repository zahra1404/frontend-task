import React from "react";
import Heading from "./Heading";
import { Box, Grid, Typography } from "@mui/material";
import ourBefactors from "../data/ourBefactors";

const OurBefactors = () => {
	return (
		<Grid sx={{ p: "1cm" }}>
			<Heading heading="Our Benefactors" />
			<Box sx={{ display: "flex", justifyContent: "center", pt: "15px" }}>
				<img src="../../images/line.png" alt="line" width="311.65px" />
			</Box>
			<Grid container sx={{ justifyContent: "center", p: "1cm 1cm" }}>
				{ourBefactors.map((item, index) => (
					<Grid item md={3.8} key={index} sx={{ pt: "1cm" }}>
						<img
							src={item.img}
							alt="volunteer name"
							width="323.54px"
							height="283.93px"
						/>
						<Typography
							sx={{
								fontFamily: "Manrope",
								fontSize: "17px",
								fontWeight: 600,
								lineHeight: "23px",
								letterSpacing: "0.25475841760635376px",
							}}>
							{item.name}
						</Typography>
						<Typography
							sx={{
								fontFamily: "Manrope",
								fontWeight: 600,
								fontSize: "11.8887px",
								lineHeight: "19px",
								letterSpacing: "0.424597px",
								color: "#575757",
							}}>
							{item.designation}
						</Typography>
					</Grid>
				))}
			</Grid>
		</Grid>
	);
};
export default OurBefactors;
