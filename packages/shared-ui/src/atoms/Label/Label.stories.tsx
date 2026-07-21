import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "./Label";
import { Input } from "../Input";

const meta: Meta<typeof Label> = {
    title: "Atoms/Label",
    component: Label,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
    args: {
        children: "Email",
    },
};

export const WithInput: Story = {
    render: () => (
        <div className="flex flex-col gap-1.5">
            <Label htmlFor="story-email">Email</Label>
            <Input id="story-email" type="email" placeholder="you@company.com" />
        </div>
    ),
};

export const Disabled: Story = {
    render: () => (
        <div className="group flex flex-col gap-1.5" data-disabled="true">
            <Label htmlFor="story-disabled">Email</Label>
            <Input id="story-disabled" disabled placeholder="Disabled" />
        </div>
    ),
};
