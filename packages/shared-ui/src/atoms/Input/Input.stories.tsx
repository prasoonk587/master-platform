import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
    title: "Atoms/Input",
    component: Input,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: "select",
            options: ["default", "ghost"],
        },
        size: {
            control: "select",
            options: ["default", "xs", "sm", "lg"],
        },
        type: {
            control: "select",
            options: ["text", "email", "password", "number", "file", "search"],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Input>;

// Variants

export const Default: Story = {
    args: {
        placeholder: "Enter text...",
    },
};

export const Ghost: Story = {
    args: {
        variant: "ghost",
        placeholder: "Enter text...",
    },
};

// Sizes

export const ExtraSmall: Story = {
    args: {
        size: "xs",
        placeholder: "Extra small",
    },
};

export const Small: Story = {
    args: {
        size: "sm",
        placeholder: "Small",
    },
};

export const Large: Story = {
    args: {
        size: "lg",
        placeholder: "Large",
    },
};

// Types

export const WithValue: Story = {
    args: {
        defaultValue: "Hello world",
    },
};

export const Email: Story = {
    args: {
        type: "email",
        placeholder: "you@example.com",
    },
};

export const Password: Story = {
    args: {
        type: "password",
        placeholder: "Password",
    },
};

export const Number: Story = {
    args: {
        type: "number",
        placeholder: "0",
    },
};

export const File: Story = {
    args: {
        type: "file",
    },
};

// States

export const Invalid: Story = {
    args: {
        "aria-invalid": true,
        defaultValue: "Invalid value",
    },
};

export const Disabled: Story = {
    args: {
        disabled: true,
        placeholder: "Disabled",
    },
};

// Showcase: every variant and size at a glance

export const AllVariants: Story = {
    render: () => (
        <div className="flex flex-col gap-3">
            <Input variant="default" placeholder="Default" />
            <Input variant="ghost" placeholder="Ghost" />
        </div>
    ),
};

export const AllSizes: Story = {
    render: () => (
        <div className="flex flex-col gap-3">
            <Input size="xs" placeholder="Extra small" />
            <Input size="sm" placeholder="Small" />
            <Input size="default" placeholder="Default" />
            <Input size="lg" placeholder="Large" />
        </div>
    ),
};
