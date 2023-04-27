import React from "react";

//mui-components
import Typography from "@mui/material/Typography";

const Heading = (props) => {
	return (
		<Typography
			sx={{
				fontFamily: "Manrope",
				fontWeight: 600,
				fontSize: "35.6662px",
				lineHeight: "48px",
				textAlign: "center",
				alignItems: "center",
				color: "#0E0E0E",
			}}>
			{props.heading}
		</Typography>
	);
};

export default Heading;
