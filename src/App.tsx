import React from "react";
import Weather from "./components/Weather/Weather";

function App() {
	return (
		<div className="App">
			<Weather showLocation={true} size="large" />
		</div>
	);
}

export default App;
