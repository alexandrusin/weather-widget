import React from "react";
import "./Values.scss";
import { ValuesModel, ValuesDefaultData, widgetSize } from "src/lib/constants";

type Props = {
	data: ValuesModel;
	size: widgetSize;
};

export default function Values({ data, size }: Props) {
	if (!data) {
		data = ValuesDefaultData;
	}

	return (
		<div className={`values-wrapper ${size}`}>
			<div className="card label">
				<span>Wind</span>
				{data.wind_speed} m/s {data.wind_direction}°
			</div>
			<div className="card label">
				<span>Humidity</span>
				{data.humidity}
			</div>
			<div className="card label">
				<span>Sunrise</span>
				{data.sunrise}
			</div>
			<div className="card label">
				<span>Sunset</span>
				{data.sunset}
			</div>
		</div>
	);
}
