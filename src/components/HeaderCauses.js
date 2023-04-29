import React from "react";

//mui-components
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const HeaderCauses = () => {
	return (
		<Box
			sx={{
				backgroundImage: `url(${"../../images/header.png"})`,
				backgroundSize: "cover",
				height: "471.75px",
				padding: "2cm 2cm 1cm 2cm",
			}}>
			<Typography
				sx={{
					color: "#fff",
					fontSize: "64.53px",
					lineHeight: "88px",
					fontFamily: "Manrope",
					fontWeight: 400,
				}}>
				<span style={{ color: "#A3DA8D", fontWeight: 700 }}> Who </span>
				We Are
			</Typography>
			<Typography
				sx={{
					color: "#fff",
					fontSize: "64.53px",
					lineHeight: "88px",
					fontFamily: "Manrope",
					fontWeight: 400,
				}}>
				<span
					style={{
						color: "#FFA17A",
						fontWeight: 700,
						marginLeft: "5cm",
					}}>
					What{" "}
				</span>
				We Do
			</Typography>
			<Box
				sx={{
					borderTop: "1px solid #F3EADA",
					mt: "0.5cm",
					width: "18cm",
				}}
			/>
			<Typography
				sx={{
					fontFamily: "Manrope",
					fontWeight: 700,
					fontSize: "10.1817px",
					lineHeight: "14px",
					letterSpacing: "2.54543px",
					textTransform: "uppercase",
					color: "#FFFFFF",
					mt: "0.5cm",
				}}>
				Home > Our cause
			</Typography>
		</Box>
	);
};

export default HeaderCauses;
