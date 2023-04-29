import React from "react";

//mui-components
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

//data
import compulsiveFacts from "../data/compulsiveFacts";

const ConpulsiveFacts = () => {
	return (
		<Grid container sx={{ justifyContent: "space-evenly", p: "1cm" }}>
			<Grid item md={4} sx={{ m: "3cm 1cm" }}>
				<Typography
					sx={{
						fontFamily: "Manrope",
						fontWeight: 600,
						fontSize: "35.6662px",
						lineHeight: "48px",
						color: " #0E0E0E",
					}}>
					Some Compulsive Facts
				</Typography>
				<Typography
					sx={{
						fontFamily: "Manrope",
						fontWeight: 500,
						fontSize: "15.2855px",
						lineHeight: "25px",
						letterSpacing: "0.424597px",
						color: "#575757",
						mt: "0.2cm",
						textAlign: "justify",
					}}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Pellentesque condimentum neque ligula elementum convallis
					cursus. Nunc dignissim mi pellentesque mattis posuere
					faucibus.
				</Typography>
			</Grid>
			<Grid item>
				<Grid container item>
					{compulsiveFacts.map((cf, index) => (
						<>
							<Grid
								item
								md={5}
								key={index}
								sx={{ m: "1cm 0cm", textAlign: "right" }}>
								<img
									src={cf.img}
									alt="img"
									width={cf.width}
									height={cf.height}
								/>
								<Typography
									sx={{
										fontFamily: "Manrope",
										fontWeight: 700,
										fontSize: "64.5388px",
										lineHeight: "86px",
										color: "#146356",
									}}>
									{cf.number}
								</Typography>
								<Typography
									sx={{
										fontFamily: "Manrope",
										fontWeight: 600,
										fontSize: "20.3807px",
										lineHeight: "27px",
										letterSpacing: "0.254758px",
										color: "#0E0E0E",
									}}>
									{cf.text}
								</Typography>
							</Grid>
						</>
					))}
				</Grid>
			</Grid>
		</Grid>
	);
};

export default ConpulsiveFacts;
