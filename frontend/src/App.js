import React from "react";
import "./App.css";
import Calendar from "./Components/Calendar";
import AddCard from "./Components/AddCard";
import AddSchedule from "./Components/AddSchedule";

function App() {

	
	return (
		<div style={{ width: "100%" }}>
			<div class="grid-container">
				<div class="cardholder">
					<AddCard />			
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
