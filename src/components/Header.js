import React from "react";

//mui-components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const Header = () => {
	return (
		<>
			<Box
				sx={{
					backgroundImage: `url(${"../../images/headImg.png"})`,
					backgroundSize: "cover",
					height: "534.14px",
					padding: "2cm",
				}}>
				<Typography
					sx={{
						color: "#fff",
						fontSize: "30.57px",
						lineHeight: "41.76px",
						fontFamily: "Manrope",
						fontWeight: 400,
					}}>
					Help <span style={{ color: "#FFA17A" }}>Today</span> for
				</Typography>
				<Typography
					sx={{
						color: "#fff",
						fontSize: "64.53px",
						lineHeight: "88px",
						fontFamily: "Manrope",
						fontWeight: 400,
						pl: "1.6cm",
					}}>
					Brighter <span style={{ color: "#A3DA8D" }}> Tomorrow</span>
				</Typography>
				<Typography
					sx={{
						color: "#fff",
						fontSize: "15px",
						lineHeight: "25px",
						fontFamily: "Manrope",
						fontWeight: 500,
						width: "16cm",
						pt: "1cm",
						letterSpacing: "0.42px",
					}}>
					Leaders across the country are tackling the most challenging
					and pressing issues of our time. Earth Let us all join to
					deal with unprecedented threats to Earth's life.
				</Typography>
				<Grid container sx={{ pt: "2cm" }}>
					<Grid item>
						<Button
							variant="contained"
							sx={{
								backgroundColor: "#fAFAFA",
								color: "#146356",
								padding: "13px 33px",
								borderRadius: "3px",
								fontSize: "16px",
								lineHeight: "21px",
								fontFamily: "Manrope",
								fontWeight: 700,
								"&:hover": {
									backgroundColor: "#fAFAFA",
									color: "#146356",
								},
							}}>
							Donate Now
						</Button>
					</Grid>
					<Grid item sx={{ ml: "1cm" }}>
						<Button
							variant="outlined"
							sx={{
								padding: "13px 33px",
								borderRadius: "3px",
								color: "#fAFAFA",
								borderColor: "#FAFAFA",
								fontSize: "16px",
								lineHeight: "21px",
								fontFamily: "Manrope",
								fontWeight: 700,
								"&:hover": {
									color: "#fAFAFA",
									borderColor: "#FAFAFA",
								},
							}}>
							Contact Us
						</Button>
					</Grid>
				</Grid>
			</Box>
		</>
	);
};

export default Header;
