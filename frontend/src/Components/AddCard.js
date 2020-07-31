import React from "react";
import SmartCard from "./SmartCard";
import axios from "axios";
import AddDevice from "./AddDevice";

export default class AddCard extends React.Component {
	state = {
		devices: [],
	};

	componentDidMount() {
		axios.get(`http://localhost:8080/devices`).then((res) => {
			const devices = res.data;
			this.setState({ devices });
			console.log(devices[1].state)
		});
	}

	render() {
		return (
			<div class = "line">
				{this.state.devices.map((device) => (
					<SmartCard type = {device.device_type} name = {device.device_name}> power = {device.state}</SmartCard>
				))}
				
			</div>
		);
	}
}
