import React from "react";
import "./App.css";
import SmartCard from "./Components/SmartCard";
import Calendar from "./Components/Calendar";
import AddDevice from "./Components/AddDevice";

function App() {

	
	return (
		<div style={{ width: "100%" }}>
			<div class="grid-container">
				<div class="cardholder">
					<AddDevice />
					

					
				</div>

				<div class="schedule">
					<Calendar />
				</div>

				<div class="controls">
					
				</div>
			</div>
		</div>
	);
}

export default App;
