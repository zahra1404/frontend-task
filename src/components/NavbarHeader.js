import React from "react";

//mui-components
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const NavbarHeader = () => {
	return (
		<>
			<Grid
				container
				sx={{
					backgroundColor: "#000",
					height: "33.97px",
					justifyContent: "space-between",
					p: "0cm 1cm",
				}}>
				<Grid item sx={{ pt: "10px" }}>
					<img
						src="../../images/facebook.png"
						alt="pointer"
						width="6.62px"
						height="12.74px"
						style={{ marginLeft: "1cm" }}
					/>
					<img
						src="../../images/linkedin.png"
						alt="pointer"
						width="13.59px"
						height="13.02px"
						style={{ marginLeft: "1cm" }}
					/>
					<img
						src="../../images/twitter.png"
						alt="pointer"
						width="12.74px"
						height="10.37px"
						style={{ marginLeft: "1cm" }}
					/>
					<img
						src="../../images/instagram.png"
						alt="pointer"
						width="12.74px"
						height="12.74px"
						style={{ marginLeft: "1cm" }}
					/>
				</Grid>
				<Grid
					item
					sx={{ display: "flex", flexDirection: "row", pt: "10px" }}>
					<img
						src="../../images/pointer.png"
						alt="pointer"
						width="13.59px"
						height="13.59px"
					/>
					<Typography
						sx={{
							color: "#fff",
							fontSize: "11.89px",
							lineHeight: "19.19px",
							letterSpacing: "0.42px",
							pl: "5px",
							fontFamily: "Manrope",
						}}>
						Join the fight, Become a Volunteer
					</Typography>
				</Grid>
			</Grid>
		</>
	);
};

export default NavbarHeader;
