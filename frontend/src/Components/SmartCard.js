import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
	root: {
        minWidth: "25%",
		display: "inline-block",
		margin: "2%",
        textAlign: "center"
        
	},
	bullet: {
		display: "inline-block",
		margin: "0 2px",
		transform: "scale(0.8)",
	},
	title: {
		fontSize: 12,
	},
	pos: {
		marginBottom: 12,
	},
});

export default function OutlinedCard() {
	const classes = useStyles();

	return (
		<div>
			<Card className={classes.root} variant="outlined">
				<CardContent>
					<Typography
						className={classes.title}
						color="textSecondary"
						gutterBottom
					>
						Smart Device Name
					</Typography>

					<Typography className={classes.pos} color="textSecondary">
						Smart Device Type
					</Typography>
				</CardContent>
				<CardActions>
					<Button size="small" variant="contained" color="primary">
						Schedule
					</Button>
					<Button size="small" variant="contained" color="secondary">
						Remove
					</Button>
				</CardActions>
			</Card>
            <Card className={classes.root} variant="outlined">
				<CardContent>
					<Typography
						className={classes.title}
						color="textSecondary"
						gutterBottom
					>
						Smart Device Name
					</Typography>

					<Typography className={classes.pos} color="textSecondary">
						Smart Device Type
					</Typography>
				</CardContent>
				<CardActions>
					<Button size="small" variant="contained" color="primary">
						Schedule
					</Button>
					<Button size="small" variant="contained" color="secondary">
						Remove
					</Button>
				</CardActions>
			</Card>
            <Card className={classes.root} variant="outlined">
				<CardContent>
					<Typography
						className={classes.title}
						color="textSecondary"
						gutterBottom
					>
						Smart Device Name
					</Typography>

					<Typography className={classes.pos} color="textSecondary">
						Smart Device Type
					</Typography>
				</CardContent>
				<CardActions>
					<Button size="small" variant="contained" color="primary">
						Schedule
					</Button>
					<Button size="small" variant="contained" color="secondary">
						Remove
					</Button>
				</CardActions>
			</Card>
            <Card className={classes.root} variant="outlined">
				<CardContent>
					<Typography
						className={classes.title}
						color="textSecondary"
						gutterBottom
					>
						Smart Device Name
					</Typography>

					<Typography className={classes.pos} color="textSecondary">
						Smart Device Type
					</Typography>
				</CardContent>
				<CardActions>
					<Button size="small" variant="contained" color="primary">
						Schedule
					</Button>
					<Button size="small" variant="contained" color="secondary">
						Remove
					</Button>
				</CardActions>
			</Card>
            <Card className={classes.root} variant="outlined">
				<CardContent>
					<Typography
						className={classes.title}
						color="textSecondary"
						gutterBottom
					>
						Smart Device Name
					</Typography>

					<Typography className={classes.pos} color="textSecondary">
						Smart Device Type
					</Typography>
				</CardContent>
				<CardActions>
					<Button size="small" variant="contained" color="primary">
						Schedule
					</Button>
					<Button size="small" variant="contained" color="secondary">
						Remove
					</Button>
				</CardActions>
			</Card>
            <Card className={classes.root} variant="outlined">
				<CardContent>
					<Typography
						className={classes.title}
						color="textSecondary"
						gutterBottom
					>
						Smart Device Name
					</Typography>

					<Typography className={classes.pos} color="textSecondary">
						Smart Device Type
					</Typography>
				</CardContent>
				<CardActions>
					<Button size="small" variant="contained" color="primary">
						Schedule
					</Button>
					<Button size="small" variant="contained" color="secondary">
						Remove
					</Button>
				</CardActions>
			</Card>
            <Card className={classes.root} variant="outlined">
				<CardContent>
					<Typography
						className={classes.title}
						color="textSecondary"
						gutterBottom
					>
						Smart Device Name
					</Typography>

					<Typography className={classes.pos} color="textSecondary">
						Smart Device Type
					</Typography>
				</CardContent>
				<CardActions>
					<Button size="small" variant="contained" color="primary">
						Schedule
					</Button>
					<Button size="small" variant="contained" color="secondary">
						Remove
					</Button>
				</CardActions>
			</Card>
            <Card className={classes.root} variant="outlined">
				<CardContent>
					<Typography
						className={classes.title}
						color="textSecondary"
						gutterBottom
					>
						Smart Device Name
					</Typography>

					<Typography className={classes.pos} color="textSecondary">
						Smart Device Type
					</Typography>
				</CardContent>
				<CardActions>
					<Button size="small" variant="contained" color="primary">
						Schedule
					</Button>
					<Button size="small" variant="contained" color="secondary">
						Remove
					</Button>
				</CardActions>
			</Card>
            <Card className={classes.root} variant="outlined">
				<CardContent>
					<Typography
						className={classes.title}
						color="textSecondary"
						gutterBottom
					>
						Smart Device Name
					</Typography>

					<Typography className={classes.pos} color="textSecondary">
						Smart Device Type
					</Typography>
				</CardContent>
				<CardActions>
					<Button size="small" variant="contained" color="primary">
						Schedule
					</Button>
					<Button size="small" variant="contained" color="secondary">
						Remove
					</Button>
				</CardActions>
			</Card>
		</div>
	);
}
