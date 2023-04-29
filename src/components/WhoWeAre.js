import React from "react";

//mui-components
import Box from "@mui/icons-material/Box";

const WhoWeAre = () => {
	return (
		<Box
			sx={{
				backgroundImage: `url(${"../../images/headImg.png"})`,
				backgroundSize: "cover",
				height: "534.14px",
				padding: "2cm",
			}}></Box>
	);
};

export default WhoWeAre;
