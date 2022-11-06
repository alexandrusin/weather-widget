import { useEffect, useState } from "react";
import {
	OPENWEATHER_API_URL,
	OPENWEATHER_API_KEY,
	LOCATION,
	dataType,
	TodayModel,
	TodayDefaultData,
	ValuesModel,
	ValuesDefaultData,
	ForecastModel,
	ForecastDefaultData,
} from "src/lib/constants";
import moment from "moment";

export const useWeather = () => {
	const [todayData, setTodayData] = useState<TodayModel>(TodayDefaultData);
	const [valuesData, setValuesData] =
		useState<ValuesModel>(ValuesDefaultData);
	const [forecastData, setForecastData] =
		useState<ForecastModel[]>(ForecastDefaultData);

	useEffect(() => {
		async function fetchData(type: dataType) {
			const response = await fetch(
				`${OPENWEATHER_API_URL}${type}?q=${LOCATION.city},${LOCATION.country}&units=metric&appid=${OPENWEATHER_API_KEY}`
			);
			const data = await response.json();
			return data;
		}

		fetchData("weather")
			.then((data) => {
				formatWeatherData(data);
				console.log("Weather ->>>", data);
			})
			.catch((error) => {
				console.log(error);
			});

		fetchData("forecast")
			.then((data) => {
				formatForecastData(data);
				console.log("Forecast ->>>", data);
			})
			.catch((error) => {
				console.log(error);
			});

		const formatWeatherData = (data: any) => {
			let today = {
				temp: data?.main.temp,
				temp_min: data?.main.temp_min,
				temp_max: data?.main.temp_max,
				icon_url: `http://openweathermap.org/img/wn/${data?.weather[0].icon}@4x.png`,
				description: data?.weather[0].description,
			};

			setTodayData(today);

			let values = {
				wind_speed: data?.wind.speed,
				wind_direction: data?.wind.deg,
				humidity: data?.main.humidity,
				sunrise: moment(data?.sys.sunrise * 1000).format("HH:mm"),
				sunset: moment(data?.sys.sunset * 1000).format("HH:mm"),
			};

			setValuesData(values);
		};

		const formatForecastData = (data: any) => {
			let forecast: ForecastModel[] = [];

			data.list.forEach((day: any) => {
				forecast.push({
					day: new Date(day?.dt_txt).toLocaleString("en-GB", {
						weekday: "short",
					}),
					time: moment(day?.dt_txt).format("HH:mm"),
					temp_min: day?.main.temp_min,
					temp_max: day?.main.temp_max,
					icon_url: `http://openweathermap.org/img/wn/${day?.weather[0].icon}@4x.png`,
				});
			});

			setForecastData(forecast);
		};
	}, []);

	return {
		todayData,
		valuesData,
		forecastData,
	};
};
