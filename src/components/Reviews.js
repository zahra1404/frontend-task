import React from "react";

//mui-components
import Typography from "@mui/material/Typography";

import Grid from "@mui/material/Grid";

//data
import reviews from "../data/reviews";

const Reviews = () => {
	return (
		<Grid container sx={{ justifyContent: "center", p: "0.5cm 1cm" }}>
			{reviews.map((review, index) => (
				<>
					<Grid
						item
						md={2.5}
						sx={{
							backgroundColor: "#FAFAFA",
							p: "0.5cm",
							m: "1cm",
						}}>
						<img
							src="../../images/comma.png"
							alt="comma"
							width="40.76px"
							height="26.82px"
						/>
						<Typography
							sx={{
								fontFamily: "Manrope",
								fontWeight: 500,
								fontSize: "15.2855px",
								lineHeight: "25px",
								letterSpacing: " 0.424597px",
								color: "#0E0E0E",
								textAlign: "justify",
								mt: "20px",
							}}>
							{review.desc}
						</Typography>
						<Grid container item>
							<Grid item sx={{ mt: "0.5cm" }}>
								<img
									src={review.img}
									alt="img"
									width="42.27px"
									height="42.27px"
								/>
							</Grid>
							<Grid item sx={{ mt: "0.5cm" }}>
								<Typography
									sx={{
										fontFamily: "Manrope",
										fontWeight: 600,
										fontSize: "16.9839px",
										lineHeight: "23px",
										letterSpacing: "0.254758px",
										color: "#0E0E0E",
										pl: "0.5cm",
									}}>
									{review.name}
								</Typography>
								<Typography
									sx={{
										p: "0.2cm 0.5cm",
										fontFamily: "Manrope",
										fontWeight: 600,
										fontSize: " 11.8887px",
										lineHeight: "19px",
										letterSpacing: "0.424597px",
										color: "#575757",
									}}>
									{review.designation}
								</Typography>
							</Grid>
						</Grid>
					</Grid>
				</>
			))}
		</Grid>
	);
};

export default Reviews;
