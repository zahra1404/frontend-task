//mui-components
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

//components
import Loader from "./Loader";

const CardStudyCard = ({ heading, subHeading, desc }) => {
	const progressValue = 67;
	return (
		<Card
			sx={{
				display: "flex",
				m: "1cm",
			}}>
			<Box sx={{ display: "flex", flexDirection: "row" }}>
				<CardMedia
					component="img"
					sx={{ width: 332 }}
					image="../../images/fire.png"
					alt="Fire"
				/>
				<CardContent
					sx={{
						flex: "1 0 auto",
						backgroundColor: "#146356",
						width: "800px",
						ml: "-1px",
						p: "1cm",
					}}>
					<Typography
						sx={{
							fontFamily: "Manrope",
							fontWeight: 700,
							fontSize: "10.1903px",
							lineHeight: "14px",
							letterSpacing: "2.54758px",
							textTransform: " uppercase",
							color: "#A3DA8D",
						}}>
						{heading}
					</Typography>
					<Grid container sx={{ justifyContent: "space-between" }}>
						<Grid
							item
							md={7}
							sx={{
								fontFamily: "Manrope",
								fontWeight: 600,
								fontSize: "20.3807px",
								lineHeight: " 27px",
								letterSpacing: "0.254758px",
								color: "#FFFFFF",
								mt: "20px",
							}}>
							{subHeading}
						</Grid>
						<Grid item>
							<Button
								variant="outlined"
								sx={{
									padding: "13px 33px",
									borderRadius: "3px",
									color: "#FFA17A",
									borderColor: "#FFA17A",
									fontSize: "16px",
									lineHeight: "21px",
									fontFamily: "Manrope",
									textTransform: "capitalize",
									mt: "20px",
									"&:hover": {
										color: "#FFA17A",
										borderColor: "#FFA17A",
									},
								}}>
								Donate
							</Button>
						</Grid>
					</Grid>
					<Typography
						sx={{
							fontFamily: "Manrope",
							fontWeight: 500,
							fontSize: "15.2855px",
							lineHeight: "25px",
							letterSpacing: "0.424597px",
							color: "#FAFAFA",
							textAlign: "justify",
							mt: "1cm",
						}}>
						{desc}
					</Typography>
					<Typography
						sx={{
							color: "#A3DA8D",
							fontSize: "11px",
							fontFamily: "Manrope",
							m: "0.5cm 0cm 0cm 14cm",
						}}>{`${progressValue}%`}</Typography>
					<Loader value={progressValue} />
				</CardContent>
			</Box>
		</Card>
	);
};

export default CardStudyCard;
