import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Switch from "@material-ui/core/Switch";
import Dialog from "@material-ui/core/Dialog";
import DeleteAction from "./DeleteAction";
import ScheduleAction from "./ScheduleAction";
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
	root: {
		maxWidth: "35%",
		display: "inline-block",
		margin: "1%",
	},
	bullet: {
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

	const [open, setOpen] = React.useState(false);

	const [state, setState] = React.useState({
		checkedA: true,
		checkedB: true,
	});

	const handleChange = (event) => {
		setState({ ...state, [event.target.name]: event.target.checked });
	};

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Box component="div" display="inline">
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
					checked={props.power}
					onChange={handleChange}
					color="primary"
					name="checkedB"
					inputProps={{ "aria-label": "primary checkbox" }}
				/>
				<CardActions>
					<ScheduleAction name={props.name} type={props.type} />
					<DeleteAction />
				</CardActions>
			</Card>
		</Box>
	);
}
