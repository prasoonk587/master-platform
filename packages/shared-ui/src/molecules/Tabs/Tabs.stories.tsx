import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./Tabs";

const meta: Meta<typeof Tabs> = {
    title: "Molecules/Tabs",
    component: Tabs,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
    render: () => (
        <Tabs defaultValue="login" className="w-80">
            <TabsList>
                <TabsTrigger value="login">Log in</TabsTrigger>
                <TabsTrigger value="signup">Sign up</TabsTrigger>
            </TabsList>
            <TabsContent value="login">Log in form goes here.</TabsContent>
            <TabsContent value="signup">Sign up form goes here.</TabsContent>
        </Tabs>
    ),
};

export const LineVariant: Story = {
    render: () => (
        <Tabs defaultValue="login" className="w-80">
            <TabsList variant="line">
                <TabsTrigger value="login">Log in</TabsTrigger>
                <TabsTrigger value="signup">Sign up</TabsTrigger>
            </TabsList>
            <TabsContent value="login">Log in form goes here.</TabsContent>
            <TabsContent value="signup">Sign up form goes here.</TabsContent>
        </Tabs>
    ),
};

export const ThreeTabs: Story = {
    render: () => (
        <Tabs defaultValue="one" className="w-80">
            <TabsList>
                <TabsTrigger value="one">One</TabsTrigger>
                <TabsTrigger value="two">Two</TabsTrigger>
                <TabsTrigger value="three">Three</TabsTrigger>
            </TabsList>
            <TabsContent value="one">Tab one content.</TabsContent>
            <TabsContent value="two">Tab two content.</TabsContent>
            <TabsContent value="three">Tab three content.</TabsContent>
        </Tabs>
    ),
};

export const Disabled: Story = {
    render: () => (
        <Tabs defaultValue="login" className="w-80">
            <TabsList>
                <TabsTrigger value="login">Log in</TabsTrigger>
                <TabsTrigger value="signup" disabled>
                    Sign up
                </TabsTrigger>
            </TabsList>
            <TabsContent value="login">Log in form goes here.</TabsContent>
        </Tabs>
    ),
};
