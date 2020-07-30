import React from "react";
import SmartCard from "./SmartCard";
import axios from "axios";

export default class AddDevice extends React.Component {
	state = {
		devices: [],
	};

	componentDidMount() {
		axios.get(`http://localhost:8080/devices`).then((res) => {
			const devices = res.data;
			this.setState({ devices });
		});
	}

	render() {
		return (
			<div display = "inline-block">
				{this.state.devices.map((device) => (
					<SmartCard type = {device.device_type} name = {device.device_name}> </SmartCard>
				))}
			</div>
		);
	}
}
