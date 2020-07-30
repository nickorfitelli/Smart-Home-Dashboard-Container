import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Switch from "@material-ui/core/Switch";

const useStyles = makeStyles({
	root: {
		minWidth: "25%",
		display: "inline-block",
		margin: "2%",
		textAlign: "center",
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

export default function OutlinedCard(props) {
	const classes = useStyles();

	const [state, setState] = React.useState({
		checkedA: true,
		checkedB: true,
	});

	const handleChange = (event) => {
		setState({ ...state, [event.target.name]: event.target.checked });
	};

	return (
		<div>
			<Card className={classes.root} variant="outlined">
				<CardContent>
					<Typography
						className={classes.title}
						color="textSecondary"
						gutterBottom
					>
						{props.type}
					</Typography>

					<Typography className={classes.pos} color="textSecondary">
						{props.name}
					</Typography>
				</CardContent>
				<Switch
					checked={state.checkedB}
					onChange={handleChange}
					color="primary"
					name="checkedB"
					inputProps={{ "aria-label": "primary checkbox" }}
				/>
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
