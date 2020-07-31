import React from "react";
import axios from "axios";
import SmartCard from "./SmartCard"

export default class AddSchedule extends React.Component {
	state = {
		schedule: [],
	};

	componentDidMount() {
		axios.get(`http://localhost:8080/schedule`).then((res) => {
			const schedule = res.data;
			this.setState({ schedule });
		});
	}

	render() {
		return (
			<div display = "inline-block">
				{this.state.schedule.map((schedule) => (
					<li>
                        {schedule.device.device_name} <br></br> Start Date: {schedule.start_date} Start Time: {schedule.start_time}<br></br>
                        End Date: {schedule.end_date} End Time: {schedule.end_time}
                    </li> 
				))}
			</div>
		);
	}
}
