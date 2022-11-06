import React from "react";
import "./Forecast.scss";
import { ForecastModel, ForecastDefaultData } from "src/lib/constants";

type Props = {
	data: ForecastModel[];
};

export default function Forecast({ data }: Props) {
	if (!data) {
		data = ForecastDefaultData;
	}

	return (
		<div className="forecast-wrapper">
			{data.map((item: any, index: number) => (
				<div className="forecast-day card" key={index}>
					<div className="day-name">{item.day}</div>
					<div className="day-time">{item.time}</div>
					<img
						src={item.icon_url}
						width={50}
						height={50}
						alt="Weather icon"
					/>
					<div className="temp">
						{Math.round(item.temp_min)}°~
						{Math.round(item.temp_max)}°
					</div>
				</div>
			))}
		</div>
	);
}
