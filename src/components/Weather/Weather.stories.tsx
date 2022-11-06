import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Weather from "./Weather";

export default {
	title: "Weather/Weather",
	component: Weather,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Weather>;

const Template: ComponentStory<typeof Weather> = (args) => (
	<Weather {...args} />
);

export const Default = Template.bind({});
Default.args = {
	showLocation: true,
	size: "large",
};
