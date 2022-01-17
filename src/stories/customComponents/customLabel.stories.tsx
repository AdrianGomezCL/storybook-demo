import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CustomLabel, Props } from "../../components/CustomLabel";

// Se definen los parametros del componente para renderizacion en Storybook
export default {
    title: "Customs/Label",
    component: CustomLabel
} as ComponentMeta<typeof CustomLabel>;

// Se crea un Template basico para el componente y se importan los Props del mismo componente
const Template:ComponentStory<typeof CustomLabel> = (args) => <CustomLabel { ...args } />

// Componente basico
export const Basic = Template.bind({});
Basic.args = {
    label: "Basic",
    size: "normal"
}

export const Secondary = Template.bind({});

export const AllCaps = Template.bind({});
