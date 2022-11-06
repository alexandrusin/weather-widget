import React from "react";
import "./Today.scss";
import { TodayModel, TodayDefaultData, widgetSize } from "src/lib/constants";

type Props = {
	data: TodayModel;
	size: widgetSize;
};

export default function Today({ data, size }: Props) {
	if (!data) {
		data = TodayDefaultData;
	}

	return (
		<div className={`today-wrapper card ${size}`}>
			<div className="today-temp">{Math.round(data.temp)}°C</div>
			<div className="today-icon">
				<img
					src={data.icon_url}
					width={size === "large" ? 200 : 150}
					height={size === "large" ? 200 : 150}
					alt={data.description}
					title={data.description}
				/>
			</div>
			<div className="today-minmax">
				<div className="label">
					<span>MIN</span>
					{Math.round(data.temp_min)}°C
				</div>
				{size === "small" && <div className="spacer">/</div>}
				<div className="label">
					<span>MAX</span>
					{Math.round(data.temp_max)}°C
				</div>
			</div>
		</div>
	);
}
