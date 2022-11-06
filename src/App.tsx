import React from "react";
import Weather from "./components/Weather/Weather";

function App() {
	const isMobile = window.innerWidth <= 600;

	return (
		<div className="App">
			<Weather showLocation={true} size={isMobile ? "small" : "large"} />
		</div>
	);
}

export default App;
