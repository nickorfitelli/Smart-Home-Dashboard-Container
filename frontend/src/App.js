import React from "react";
import "./App.css";
import SmartCard from "./Components/SmartCard";
import Calendar from "./Components/Calendar";
import Button from '@material-ui/core/Button';


function App() {
	return (
		<div style={{ width: "100%" }}>
			<div class="grid-container">
				<div class="cardholder">
					<SmartCard />
				</div>

				<div class="schedule">
					<Calendar />
				</div>

				<div class="controls">
					<Button size="small" variant="contained" color="primary">
						Add New Device
					</Button>
				</div>
			</div>
		</div>
	);
}

export default App;
