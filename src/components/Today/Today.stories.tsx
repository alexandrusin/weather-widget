import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Today from "./Today";
import { TodayDefaultData } from "src/lib/constants";

export default {
	title: "Weather/Today",
	component: Today,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Today>;

const Template: ComponentStory<typeof Today> = (args) => <Today {...args} />;

export const Default = Template.bind({});
Default.args = {
	data: TodayDefaultData,
	size: "large",
};
