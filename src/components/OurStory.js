import React from "react";

//mui-components
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const OurStory = () => {
	return (
		<Grid container sx={{ justifyContent: "space-evenly", p: "2cm 1cm" }}>
			<Grid item md={4}>
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
					WHO WE ARE
				</Typography>
				<Typography
					sx={{
						fontFamily: "Manrope",
						fontWeight: 700,
						fontSize: "48.3631px",
						lineHeight: "64px",
						color: "#0E0E0E",
					}}>
					Our Story
				</Typography>

				<Typography
					sx={{
						fontFamily: "Manrope",
						fontWeight: 500,
						fontSize: "15.2726px",
						lineHeight: "25px",
						letterSpacing: "0.424238px",
						color: "#575757",
						mt: "20px",
					}}>
					Realizing the risk that environmental threats pose to
					humankind and the planet itself, we took this step to save
					ourselves and the planet. We reached our green goals by
					starting with a minimum number of volunteers, and now we are
					a massive family of volunteers.
				</Typography>
				<Grid container item>
					<Grid item>
						<img
							src="../../images/Cube.png"
							alt="img"
							width="23px"
							height="23px"
							style={{ marginTop: "1cm" }}
						/>
					</Grid>
					<Grid item>
						<Typography
							sx={{
								fontFamily: "Manrope",
								fontWeight: 500,
								fontSize: "15.2726px",
								lineHeight: "25px",
								letterSpacing: "0.424238px",
								color: "#0E0E0E",
								mt: "1cm",
								pl: "10px",
							}}>
							Identifying all pertinent issues and factors of
							issues.
						</Typography>
					</Grid>
				</Grid>
				<Grid container item>
					<Grid item>
						<img
							src="../../images/Cube.png"
							alt="img"
							width="23px"
							height="23px"
							style={{ marginTop: "20px" }}
						/>
					</Grid>
					<Grid item>
						<Typography
							sx={{
								fontFamily: "Manrope",
								fontWeight: 500,
								fontSize: "15.2726px",
								lineHeight: "25px",
								letterSpacing: "0.424238px",
								color: "#0E0E0E",
								mt: "20px",
								pl: "10px",
							}}>
							Facilitating meaningful public participation and
							review.
						</Typography>
					</Grid>
				</Grid>
				<Grid container item>
					<Grid item>
						<img
							src="../../images/Cube.png"
							alt="img"
							width="23px"
							height="23px"
							style={{ marginTop: "20px" }}
						/>
					</Grid>
					<Grid item>
						<Typography
							sx={{
								fontFamily: "Manrope",
								fontWeight: 500,
								fontSize: "15.2726px",
								lineHeight: "25px",
								letterSpacing: "0.424238px",
								color: "#0E0E0E",
								mt: "20px",
								pl: "10px",
							}}>
							Choosing the EIA's appropriate time and space
							boundaries
						</Typography>
					</Grid>
				</Grid>
			</Grid>
			<Grid item>
				<img
					src="../../images/our-story.png"
					alt="our-story"
					width="364px"
					height="467.51px"
				/>
			</Grid>
		</Grid>
	);
};

export default OurStory;
