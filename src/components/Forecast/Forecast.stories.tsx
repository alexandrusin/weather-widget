import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Forecast from "./Forecast";
import { ForecastDefaultData } from "src/lib/constants";

export default {
	title: "Weather/Forecast",
	component: Forecast,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Forecast>;

const Template: ComponentStory<typeof Forecast> = (args) => (
	<Forecast {...args} />
);

export const Default = Template.bind({});
Default.args = {
	data: ForecastDefaultData,
};
