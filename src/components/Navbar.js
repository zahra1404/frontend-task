import React from "react";
import { Link } from "react-router-dom";
//mui-components
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

//mui-icon
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import SearchIcon from "@mui/icons-material/Search";

//data
import navbarItems from "../data/navbarItems";

//components
import NavbarHeader from "./NavbarHeader";

const Navbar = () => {
	return (
		<>
			<NavbarHeader />
			<AppBar position="static" sx={{ backgroundColor: "#146356" }}>
				<Toolbar>
					<Grid
						container
						sx={{
							justifyContent: "space-between",
							padding: "0.5cm",
							alignItems: "center",
						}}>
						<Grid item>
							<img
								src="../../images/logo.png"
								width="54.1px"
								height="33.97px"
								alt="logo"
							/>
						</Grid>

						<Grid
							item
							sx={{ display: "flex", flexDirection: "row" }}>
							{navbarItems.map((item, index) => (
								<Grid key={index}>
									<Link
										to={item.link}
										style={{ textDecoration: "none" }}>
										<Typography
											sx={{
												fontSize: "14px",
												color: item.color,
												ml: "1cm",
												lineHeight: "18px",
												fontFamily: "Manrope",
											}}>
											{item.title}
											{item.icon === "true" ? (
												<ArrowOutwardIcon
													fontSize="14px"
													paddingTop="20px"
												/>
											) : (
												""
											)}
										</Typography>
									</Link>
								</Grid>
							))}
						</Grid>

						<Grid item>
							<SearchIcon
								sx={{
									mb: "-10px",
									p: "0cm 1cm",
									color: "#A3DA8D",
								}}
							/>
							<Button
								variant="contained"
								sx={{
									backgroundColor: "#FFA17A",
									fontSize: "13px",
									color: "#fff",
									textTransform: "capitalize",
									borderRadius: "4px",
									padding: "10px 27px",
									fontFamily: "Manrope",
								}}>
								Help us Fight
							</Button>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		</>
	);
};

export default Navbar;
