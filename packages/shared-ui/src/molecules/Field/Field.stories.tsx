import type { Meta, StoryObj } from "@storybook/react";
import { Field } from "./Field";
import { Input } from "../../atoms/Input";
import { Button } from "../../atoms/Button";

const meta: Meta<typeof Field> = {
    title: "Molecules/Field",
    component: Field,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Field>;

export const Default: Story = {
    render: () => (
        <div className="w-72">
            <Field label="Email" htmlFor="story-field-email">
                <Input id="story-field-email" type="email" placeholder="you@company.com" />
            </Field>
        </div>
    ),
};

export const WithLabelSuffix: Story = {
    render: () => (
        <div className="w-72">
            <Field
                label="Password"
                htmlFor="story-field-password"
                labelSuffix={
                    <Button variant="link" size="xs" className="h-auto p-0 text-xs">
                        Forgot password?
                    </Button>
                }
            >
                <Input id="story-field-password" type="password" placeholder="••••••••" />
            </Field>
        </div>
    ),
};

export const FormExample: Story = {
    render: () => (
        <div className="flex w-72 flex-col gap-3.5">
            <Field label="Full name" htmlFor="story-field-name">
                <Input id="story-field-name" placeholder="Jordan Reyes" />
            </Field>
            <Field label="Work email" htmlFor="story-field-work-email">
                <Input id="story-field-work-email" type="email" placeholder="you@company.com" />
            </Field>
            <Field label="Password" htmlFor="story-field-signup-password">
                <Input
                    id="story-field-signup-password"
                    type="password"
                    placeholder="At least 8 characters"
                />
            </Field>
        </div>
    ),
};
