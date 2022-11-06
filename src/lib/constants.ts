export const OPENWEATHER_API_URL = "https://api.openweathermap.org/data/2.5/";
export const OPENWEATHER_API_KEY = "908ad75f36452c11ff4306cd53162218";
export const OPENWEATHER_ICON_URL = "http://openweathermap.org/img/wn/";

export const WEEK_DAYS = ["Mon", "Tue", "Wed", "Thu", "Fir", "Sat", "Sun"];

export const LOCATION = {
	city: "Cluj-Napoca",
	country: "Romania",
};

export type dataType = "weather" | "forecast";
export type widgetSize = "small" | "large";

export type TodayModel = {
	temp: number;
	temp_min: number;
	temp_max: number;
	icon_url: string;
	description: string;
};

export const TodayDefaultData: TodayModel = {
	temp: 0,
	temp_min: 0,
	temp_max: 0,
	icon_url: "http://openweathermap.org/img/wn/01d@4x.png",
	description: "clear sky",
};

export type ValuesModel = {
	wind_speed: number;
	wind_direction: number;
	humidity: number;
	sunrise: string;
	sunset: string;
};

export const ValuesDefaultData: ValuesModel = {
	wind_speed: 0.8,
	wind_direction: 90,
	humidity: 0,
	sunrise: "00:00",
	sunset: "00:00",
};

export type ForecastModel = {
	day: string;
	time: string;
	temp_min: number;
	temp_max: number;
	icon_url: string;
};

export const ForecastDefaultData: ForecastModel[] = [
	{
		day: WEEK_DAYS[0],
		time: "12:00",
		temp_min: 0,
		temp_max: 0,
		icon_url: "http://openweathermap.org/img/wn/01d@2x.png",
	},
	{
		day: WEEK_DAYS[1],
		time: "12:00",
		temp_min: 0,
		temp_max: 0,
		icon_url: "http://openweathermap.org/img/wn/01d@2x.png",
	},
	{
		day: WEEK_DAYS[2],
		time: "12:00",
		temp_min: 0,
		temp_max: 0,
		icon_url: "http://openweathermap.org/img/wn/01d@2x.png",
	},
	{
		day: WEEK_DAYS[3],
		time: "12:00",
		temp_min: 0,
		temp_max: 0,
		icon_url: "http://openweathermap.org/img/wn/01d@2x.png",
	},
];
