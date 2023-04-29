import React from "react";

//mui-components
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const items = ["Our Causes", "Contact us", "Cases", "Our Benefactors"];
const Footer = () => {
	const text = {
		fontFamily: "Manrope",
		fontWeight: 400,
		fontSize: "14.8887px",
		lineHeight: " 22px",
		letterSpacing: "1.212299px",
		color: "#EDE7E3",
		width: "8cm",
	};
	const textOne = {
		fontFamily: "Manrope",
		fontWeight: 400,
		fontSize: "11.8887px",
		lineHeight: " 19.24px",
		letterSpacing: "0.212299px",
		color: "#EDE7E3",
		mt: "20px",
	};
	return (
		<Grid container sx={{ backgroundColor: "#146356", p: "2cm" }}>
			<Grid item>
				<img
					src=".././images/environmental.png"
					alt="environmental"
					width="186.82px"
					height="15.29px"
				/>
			</Grid>

			{items.map((item, index) => (
				<Grid item key={index}>
					<Typography
						sx={{
							fontFamily: "Manrope",
							fontWeight: 500,
							fontSize: "13.5871px",
							lineHeight: "18px",
							letterSpacing: "0.424597px",
							color: " #FFFFFF",
							ml: "2cm",
						}}>
						{item}
					</Typography>
				</Grid>
			))}
			<Grid container item sx={{ justifyContent: "space-between" }}>
				<Grid
					item
					sx={{
						display: "flex",
						flexDirection: "row",
						mt: "0.5cm",
					}}>
					<img
						src="../../images/f.png"
						alt="facbook"
						width="6.8px"
						height="13.45px"
					/>
					<img
						src="../../images/in.png"
						alt="facbook"
						width="13.59px"
						height="13.02px"
						style={{ marginLeft: "1cm" }}
					/>
					<img
						src="../../images/t.png"
						alt="facbook"
						width="14.15px"
						height="11.52px"
						style={{ marginLeft: "1cm" }}
					/>
					<img
						src="../../images/i.png"
						alt="facbook"
						width="14.15px"
						height="14.15px"
						style={{ marginLeft: "1cm" }}
					/>
				</Grid>
				<Grid item>
					<Typography
						sx={{
							fontFamily: "Manrope",
							fontWeight: 600,
							fontSize: "20.3807px",
							lineHeight: "27px",
							letterSpacing: "0.254758px",
							color: "#FFFFFF",
							mt: "2cm",
						}}>
						Join our Cause, Become a Member
					</Typography>
					<TextField
						id="outlined-basic"
						label="Enter your email address"
						variant="outlined"
						color="success"
						style={{
							width: "12cm",
							margin: "25px 0px",
							color: "#fff",
							backgroundColor: "#146356",
						}}
					/>
					<Button
						variant="contained"
						sx={{
							mt: "0.7cm",
							p: "14.1903px 32.1742px",
							background: " #FFA17A",
							borderRadius: "0px 3.39678px 3.39678px 0px",
							"&:hover": {
								background: " #FFA17A",
							},
						}}>
						Join
					</Button>
				</Grid>
				<Grid item sx={{ mt: "2cm" }}>
					<Typography sx={text}>
						4517 Washington Ave. Manchester, Kentucky 39495
					</Typography>
					<Typography sx={text}>
						(505) 555-0125, (406) 555-0120
					</Typography>
					<Typography sx={text}>binhan628@gmail.com</Typography>
					<Typography sx={text}>manhhachkt08@gmail.com</Typography>
				</Grid>
			</Grid>
			<Grid
				sx={{
					borderTop: "0.5px solid #5B9289",
					width: "37cm",
					mt: "1cm",
				}}
			/>
			<Grid container item sx={{ justifyContent: "space-between" }}>
				<Grid item sx={textOne}>
					All rights reserved Elysian Multipurpose Theme
				</Grid>
				<Grid item sx={textOne}>
					Terms & Conditions &nbsp;&nbsp;&nbsp;&nbsp;Privacy & Cookies
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Footer;
