import type { Meta, StoryObj } from "@storybook/react";
import { ArrowRight, Plus, Trash2 } from "lucide-react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
    title: "Atoms/Button",
    component: Button,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: "select",
            options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
        },
        size: {
            control: "select",
            options: ["default", "xs", "sm", "lg", "icon", "icon-xs", "icon-sm", "icon-lg"],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Variants

export const Default: Story = {
    args: {
        children: "Button",
    },
};

export const Secondary: Story = {
    args: {
        variant: "secondary",
        children: "Secondary",
    },
};

export const Outline: Story = {
    args: {
        variant: "outline",
        children: "Outline",
    },
};

export const Ghost: Story = {
    args: {
        variant: "ghost",
        children: "Ghost",
    },
};

export const Destructive: Story = {
    args: {
        variant: "destructive",
        children: "Delete",
    },
};

export const Link: Story = {
    args: {
        variant: "link",
        children: "Link",
    },
};

// Sizes

export const ExtraSmall: Story = {
    args: {
        size: "xs",
        children: "Extra small",
    },
};

export const Small: Story = {
    args: {
        size: "sm",
        children: "Small",
    },
};

export const Large: Story = {
    args: {
        size: "lg",
        children: "Large",
    },
};

// Icon buttons

export const IconOnly: Story = {
    args: {
        size: "icon",
        variant: "outline",
        "aria-label": "Add item",
        children: <Plus />,
    },
};

export const IconOnlySmall: Story = {
    args: {
        size: "icon-sm",
        variant: "outline",
        "aria-label": "Add item",
        children: <Plus />,
    },
};

export const IconOnlyLarge: Story = {
    args: {
        size: "icon-lg",
        variant: "outline",
        "aria-label": "Add item",
        children: <Plus />,
    },
};

export const WithLeadingIcon: Story = {
    args: {
        children: (
            <>
                <Plus data-icon="inline-start" />
                Add item
            </>
        ),
    },
};

export const WithTrailingIcon: Story = {
    args: {
        variant: "outline",
        children: (
            <>
                Continue
                <ArrowRight data-icon="inline-end" />
            </>
        ),
    },
};

export const DestructiveWithIcon: Story = {
    args: {
        variant: "destructive",
        children: (
            <>
                <Trash2 data-icon="inline-start" />
                Delete
            </>
        ),
    },
};

// asChild

export const AsChild: Story = {
    args: {
        asChild: true,
        children: <a href="#">Link rendered as an anchor</a>,
    },
};

// Disabled

export const Disabled: Story = {
    args: {
        disabled: true,
        children: "Disabled",
    },
};

// Showcase: every variant and size at a glance

export const AllVariants: Story = {
    render: () => (
        <div className="flex flex-wrap items-center gap-3">
            <Button variant="default">Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="link">Link</Button>
        </div>
    ),
};

export const AllSizes: Story = {
    render: () => (
        <div className="flex flex-wrap items-center gap-3">
            <Button size="xs">Extra small</Button>
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button size="icon-xs" aria-label="Add">
                <Plus />
            </Button>
            <Button size="icon-sm" aria-label="Add">
                <Plus />
            </Button>
            <Button size="icon" aria-label="Add">
                <Plus />
            </Button>
            <Button size="icon-lg" aria-label="Add">
                <Plus />
            </Button>
        </div>
    ),
};
