import Forecast from "../Forecast/Forecast";
import Today from "../Today/Today";
import Values from "../Values/Values";
import "./Weather.scss";

import { useWeather } from "src/hooks/useWeather";
import { LOCATION, widgetSize } from "src/lib/constants";

type Props = {
	showLocation: boolean;
	size: widgetSize;
};

export default function Weather({ showLocation, size }: Props) {
	const { todayData, valuesData, forecastData } = useWeather();

	return (
		<div className={`weather-wrapper ${size}`}>
			{showLocation && (
				<div className="location-wrapper">
					<div className="city">{LOCATION.city}</div>
					<div className="weather">{todayData.description}</div>
				</div>
			)}
			<Today data={todayData} size={size} />
			<Values data={valuesData} size={size} />
			<Forecast data={forecastData} />
		</div>
	);
}
