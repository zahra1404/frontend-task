import React from "react";

//mui-components
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Loader from "./Loader";

const Card = () => {
	const progressValue = 67;
	return (
		<Grid container sx={{ p: "2cm", justifyContent: "space-evenly" }}>
			<Grid
				item
				sx={{
					backgroundImage: `url(${"../../images/air-pollution.png"})`,
					backgroundSize: "cover",
					width: "322.69px",
					height: "518.01px",
					p: "15px",
					borderRadius: "3.39678px",
				}}>
				<Typography
					sx={{
						fontFamily: "Manrope",
						fontWeight: 700,
						fontSize: "10.1903px",
						lineHeight: "14px",
						letterSpacing: "2.54758px",
						textTransform: "uppercase",
						color: " #FAFAFA",
						mt: "350px",
					}}>
					Air Pollution
				</Typography>
				<Typography
					sx={{
						fontFamily: "Manrope",
						fontWeight: 600,
						fontSize: "20.3807px",
						lineHeight: "27px",
						letterSpacing: " 0.254758px",
						color: "#FFFFFF",
						mt: "15px",
						textAlign: "justify",
					}}>
					What’s currently happening in Air Pollution all around the
					world? AQI region-wise.
				</Typography>
			</Grid>
			<Grid
				item
				sx={{
					backgroundImage: `url(${"../../images/water.png"})`,
					backgroundSize: "cover",
					width: "322.69px",
					height: "518.01px",
					borderRadius: "3.39678px",
					p: "15px",
				}}>
				<Typography
					sx={{
						fontFamily: "Manrope",
						fontWeight: 700,
						fontSize: "10.1903px",
						lineHeight: "14px",
						letterSpacing: "2.54758px",
						textTransform: "uppercase",
						color: " #FAFAFA",
						mt: "50px",
					}}>
					WATER POLLUTANT
				</Typography>
				<Typography
					sx={{
						fontFamily: "Manrope",
						fontWeight: 600,
						fontSize: "20.3807px",
						lineHeight: "27px",
						letterSpacing: " 0.254758px",
						color: "#FFFFFF",
						mt: "15px",
						textAlign: "justify",
					}}>
					Think up spending hours every day looking for drinking
					water.
				</Typography>
				<Typography
					sx={{
						fontFamily: "Manrope",
						fontStyle: "normal",
						fontSize: " 15.2855px",
						lineheight: " 25px",
						letterSpacing: "0.424597px",
						color: "#FFFFFF",
						mt: "15px",
					}}>
					Collaborating with local partners to implement
					community-owned clean drinking water projects in remote
					communities.
				</Typography>
				<Typography
					sx={{
						color: "#A3DA8D",
						fontSize: "11px",
						fontFamily: "Manrope",
						m: "2.5cm 0cm 0cm 5cm",
					}}>{`${progressValue}%`}</Typography>
				<Loader value={progressValue} />
				<Button
					variant="outlined"
					sx={{
						color: "#fff",
						border: "1px solid #fff",
						fontSize: "16px",
						fontFamily: "Manrope",
						m: "0.7cm 2cm",
						p: "8px 30px",
						textTransform: "capitalize",
						"&:hover": {
							color: "#fff",
							border: "1px solid #fff",
						},
					}}>
					Donate
				</Button>
			</Grid>
			<Grid
				item
				sx={{
					backgroundImage: `url(${"../../images/glacious.png"})`,
					backgroundSize: "cover",
					width: "322.69px",
					height: "518.01px",
					borderRadius: "3.39678px",
					p: "15px",
				}}>
				<Typography
					sx={{
						fontFamily: "Manrope",
						fontWeight: 700,
						fontSize: "10.1903px",
						lineHeight: "14px",
						letterSpacing: "2.54758px",
						textTransform: "uppercase",
						color: " #FAFAFA",
						mt: "350px",
					}}>
					MELTING ICEBERGS
				</Typography>
				<Typography
					sx={{
						fontFamily: "Manrope",
						fontWeight: 600,
						fontSize: "20.3807px",
						lineHeight: "27px",
						letterSpacing: " 0.254758px",
						color: "#FFFFFF",
						mt: "15px",
						textAlign: "justify",
					}}>
					Negative mass balances due to retiring glaciers is causing
					them to disappear.
				</Typography>
			</Grid>
		</Grid>
	);
};

export default Card;
