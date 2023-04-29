import React from "react";

//mui-components
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

//components
import Heading from "./Heading";

//data
import wordAround from "../data/wordAround";

const WordAround = () => {
	return (
		<>
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
				What they say
			</Typography>
			<Heading heading="Word Around" />
			<Box sx={{ display: "flex", justifyContent: "center", pt: "15px" }}>
				<img src="../../images/line.png" alt="line" width="311.65px" />
			</Box>
			<Grid container sx={{ justifyContent: "center", m: "1cm 0cm" }}>
				{wordAround.map((wa, index) => (
					<Grid
						item
						key={index}
						height={wa.gridHeight}
						sx={{
							backgroundColor: "#FAFAFA",
							m: "0.5cm",

							boxShadow:
								"0px 3.3939px 8.48475px rgba(183, 183, 183, 0.15)",
							borderRadius: "3.3939px",
						}}>
						<Typography
							sx={{
								fontFamily: "Manrope",
								fontWeight: 500,
								fontSize: "15.2855px",
								lineHeight: "25px",
								letterSpacing: " 0.424597px",
								color: "#0E0E0E",
								textAlign: "justify",
								width: "12cm",
								p: "1cm 1cm 0cm 1cm",
							}}>
							{wa.desc}
						</Typography>
						<Grid container item>
							<Grid item sx={{ mt: "0.5cm" }}>
								<img
									src={wa.img}
									alt="img"
									width="42.27px"
									height="42.27px"
									style={{ marginLeft: "1cm" }}
								/>
							</Grid>
							<Grid item sx={{ mt: "0.5cm" }}>
								<Typography
									sx={{
										fontFamily: "Manrope",
										fontWeight: 600,
										fontSize: "11.9839px",
										lineHeight: "23px",
										letterSpacing: "0.254758px",
										color: "#0E0E0E",
										pl: "0.5cm",
									}}>
									{wa.name}
								</Typography>
								<img
									src={wa.stars}
									alt="rating"
									width={wa.width}
									height={wa.height}
									style={{ padding: "0cm 0cm 0.5cm 0.5cm" }}
								/>
							</Grid>
						</Grid>
					</Grid>
				))}
			</Grid>
		</>
	);
};

export default WordAround;
