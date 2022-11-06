import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Values from "./Values";
import { ValuesDefaultData } from "src/lib/constants";

export default {
	title: "Weather/Values",
	component: Values,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Values>;

const Template: ComponentStory<typeof Values> = (args) => <Values {...args} />;

export const Default = Template.bind({});
Default.args = {
	data: ValuesDefaultData,
	size: "large",
};
