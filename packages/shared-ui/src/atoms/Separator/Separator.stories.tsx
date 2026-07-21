import type { Meta, StoryObj } from "@storybook/react";
import { Separator } from "./Separator";

const meta: Meta<typeof Separator> = {
    title: "Atoms/Separator",
    component: Separator,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        orientation: {
            control: "select",
            options: ["horizontal", "vertical"],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Separator>;

export const Horizontal: Story = {
    render: () => (
        <div className="w-64">
            <div className="text-sm">Above</div>
            <Separator className="my-3" />
            <div className="text-sm">Below</div>
        </div>
    ),
};

export const Vertical: Story = {
    render: () => (
        <div className="flex h-8 items-center gap-3">
            <span className="text-sm">Left</span>
            <Separator orientation="vertical" />
            <span className="text-sm">Right</span>
        </div>
    ),
};

export const WithLabel: Story = {
    render: () => (
        <div className="flex w-64 items-center gap-3">
            <Separator className="flex-1" />
            <span className="text-muted-foreground text-xs">OR</span>
            <Separator className="flex-1" />
        </div>
    ),
};
