"use client";

import { useState } from "react";
import Image from "next/image";
import {
    Button,
    Field,
    Input,
    Separator,
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@master-platform/shared-ui";

function GoogleIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
            <path
                fill="#4285F4"
                d="M15.68 8.18c0-.56-.05-1.1-.14-1.63H8v3.09h4.3a3.68 3.68 0 0 1-1.6 2.42v2h2.59c1.51-1.4 2.39-3.45 2.39-5.88z"
            />
            <path
                fill="#34A853"
                d="M8 16c2.16 0 3.97-.72 5.29-1.94l-2.59-2c-.72.48-1.63.77-2.7.77-2.08 0-3.84-1.4-4.47-3.29H.86v2.06A8 8 0 0 0 8 16z"
            />
            <path
                fill="#FBBC05"
                d="M3.53 9.54A4.8 4.8 0 0 1 3.27 8c0-.54.09-1.06.26-1.54V4.4H.86A8 8 0 0 0 0 8c0 1.29.31 2.51.86 3.6z"
            />
            <path
                fill="#EA4335"
                d="M8 3.18c1.18 0 2.23.4 3.06 1.2l2.3-2.3C11.96.9 10.16 0 8 0A8 8 0 0 0 .86 4.4l2.67 2.06C4.16 4.58 5.92 3.18 8 3.18z"
            />
        </svg>
    );
}

function Logo() {
    return (
        <div className="mb-12 flex items-center gap-2.5 lg:mb-14">
            <div className="bg-primary flex size-[30px] shrink-0 items-center justify-center rounded-[7px]">
                <div
                    className="bg-primary-foreground h-4 w-2.5"
                    style={{
                        clipPath: "polygon(60% 0, 0 58%, 40% 58%, 30% 100%, 100% 38%, 55% 38%)",
                    }}
                />
            </div>
            <span className="text-[17px] font-bold tracking-tight">Master Platform</span>
        </div>
    );
}

function TabSwitchLink({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="text-primary h-auto p-0 font-semibold hover:underline"
        >
            {children}
        </button>
    );
}

export default function AuthPage() {
    const [tab, setTab] = useState<"login" | "signup">("login");

    return (
        <div className="bg-background text-foreground grid min-h-screen grid-cols-1 lg:h-screen lg:grid-cols-2">
            <div className="mx-auto flex w-full max-w-[560px] flex-col justify-center px-6 py-10 sm:px-10 lg:min-h-0 lg:overflow-y-auto lg:px-24 lg:py-16">
                <Logo />

                <Tabs value={tab} onValueChange={(value) => setTab(value as "login" | "signup")}>
                    <TabsList className="mb-9">
                        <TabsTrigger value="login">Log in</TabsTrigger>
                        <TabsTrigger value="signup">Sign up</TabsTrigger>
                    </TabsList>

                    <TabsContent value="login">
                        <h1 className="mb-2 text-[28px] font-bold tracking-tight">Welcome back</h1>
                        <p className="text-muted-foreground mb-8 text-[14.5px] leading-relaxed">
                            Sign in to manage your charging network, stations, and sessions.
                        </p>

                        <form className="flex flex-col gap-3.5">
                            <Field label="Email" htmlFor="login-email">
                                <Input
                                    id="login-email"
                                    type="email"
                                    size="lg"
                                    placeholder="you@company.com"
                                    autoComplete="email"
                                />
                            </Field>
                            <Field
                                label="Password"
                                htmlFor="login-password"
                                labelSuffix={
                                    <a
                                        href="#"
                                        className="text-primary text-[12.5px] font-medium hover:underline"
                                    >
                                        Forgot password?
                                    </a>
                                }
                            >
                                <Input
                                    id="login-password"
                                    type="password"
                                    size="lg"
                                    placeholder="••••••••"
                                    autoComplete="current-password"
                                />
                            </Field>

                            <Button type="submit" size="lg" className="mt-2">
                                Log in
                            </Button>

                            <div className="my-1.5 flex items-center gap-3">
                                <Separator className="flex-1" />
                                <span className="text-muted-foreground text-xs">OR</span>
                                <Separator className="flex-1" />
                            </div>

                            <Button type="button" variant="outline" size="lg" className="gap-2.5">
                                <GoogleIcon />
                                Continue with Google
                            </Button>
                        </form>

                        <p className="text-muted-foreground mt-7 text-center text-[13.5px]">
                            Don&apos;t have an account?{" "}
                            <TabSwitchLink onClick={() => setTab("signup")}>Sign up</TabSwitchLink>
                        </p>
                    </TabsContent>

                    <TabsContent value="signup">
                        <h1 className="mb-2 text-[28px] font-bold tracking-tight">
                            Create your account
                        </h1>
                        <p className="text-muted-foreground mb-8 text-[14.5px] leading-relaxed">
                            Set up Master Platform to monitor stations and manage payments in one
                            place.
                        </p>

                        <form className="flex flex-col gap-3.5">
                            <Field label="Full name" htmlFor="signup-name">
                                <Input
                                    id="signup-name"
                                    type="text"
                                    size="lg"
                                    placeholder="Jordan Reyes"
                                    autoComplete="name"
                                />
                            </Field>
                            <Field label="Work email" htmlFor="signup-email">
                                <Input
                                    id="signup-email"
                                    type="email"
                                    size="lg"
                                    placeholder="you@company.com"
                                    autoComplete="email"
                                />
                            </Field>
                            <Field label="Charging network / company name" htmlFor="signup-company">
                                <Input
                                    id="signup-company"
                                    type="text"
                                    size="lg"
                                    placeholder="Acme Charging Co."
                                    autoComplete="organization"
                                />
                            </Field>
                            <Field label="Password" htmlFor="signup-password">
                                <Input
                                    id="signup-password"
                                    type="password"
                                    size="lg"
                                    placeholder="At least 8 characters"
                                    autoComplete="new-password"
                                />
                            </Field>

                            <Button type="submit" size="lg" className="mt-2">
                                Create account
                            </Button>

                            <div className="my-1.5 flex items-center gap-3">
                                <Separator className="flex-1" />
                                <span className="text-muted-foreground text-xs">OR</span>
                                <Separator className="flex-1" />
                            </div>

                            <Button type="button" variant="outline" size="lg" className="gap-2.5">
                                <GoogleIcon />
                                Continue with Google
                            </Button>
                        </form>

                        <p className="text-muted-foreground mt-5 text-xs leading-relaxed">
                            By creating an account you agree to our{" "}
                            <a href="#" className="text-primary font-medium hover:underline">
                                Terms
                            </a>{" "}
                            and{" "}
                            <a href="#" className="text-primary font-medium hover:underline">
                                Privacy Policy
                            </a>
                            .
                        </p>

                        <p className="text-muted-foreground mt-5 text-center text-[13.5px]">
                            Already have an account?{" "}
                            <TabSwitchLink onClick={() => setTab("login")}>Log in</TabSwitchLink>
                        </p>
                    </TabsContent>
                </Tabs>
            </div>

            <div className="dark bg-background text-foreground relative flex flex-col justify-between gap-8 overflow-hidden p-6 sm:p-10 lg:h-full lg:min-h-0 lg:overflow-y-auto lg:p-14">
                <svg
                    className="pointer-events-none absolute inset-0 h-full w-full opacity-50"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="stripes"
                            width="22"
                            height="22"
                            patternTransform="rotate(45)"
                            patternUnits="userSpaceOnUse"
                        >
                            <line
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="22"
                                stroke="var(--chart-5)"
                                strokeWidth="10"
                            />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#stripes)" />
                </svg>

                <div className="relative flex justify-end">
                    <span className="bg-muted-foreground size-2 animate-pulse rounded-full" />
                    <span className="text-muted-foreground ml-2 text-xs">
                        All systems operational
                    </span>
                </div>

                <div className="relative">
                    <div className="border-border mb-8 aspect-[16/10] w-full overflow-hidden rounded-[11px] border">
                        <Image
                            src="/network-map.png"
                            alt="Live map of the Master Platform charging network"
                            width={1280}
                            height={800}
                            className="h-full w-full object-cover"
                            priority
                        />
                    </div>
                    <h2 className="mb-2.5 text-[22px] font-bold tracking-tight">
                        Your entire charging network, live on one map
                    </h2>
                    <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                        Every charger reports its status in real time — see which stalls are
                        charging, idle, or faulted, get alerts before drivers notice, and adjust
                        pricing across sites in a click.
                    </p>
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-2.5">
                            <span className="size-1.5 shrink-0 rounded-full bg-[oklch(0.75_0.16_150)]" />
                            <span className="text-foreground/90 text-[13.5px]">
                                Real-time station health & fault alerts
                            </span>
                        </div>
                        <div className="flex items-center gap-2.5">
                            <span className="bg-sidebar-primary size-1.5 shrink-0 rounded-full" />
                            <span className="text-foreground/90 text-[13.5px]">
                                Dynamic pricing & payments across all sites
                            </span>
                        </div>
                        <div className="flex items-center gap-2.5">
                            <span className="bg-muted-foreground size-1.5 shrink-0 rounded-full" />
                            <span className="text-foreground/90 text-[13.5px]">
                                Energy usage & revenue reports, per charger
                            </span>
                        </div>
                    </div>
                    <div className="border-border mt-8 flex gap-8 border-t pt-6">
                        <div>
                            <div className="text-[22px] font-bold">99.4%</div>
                            <div className="text-muted-foreground text-xs">Uptime</div>
                        </div>
                        <div>
                            <div className="text-[22px] font-bold">400+</div>
                            <div className="text-muted-foreground text-xs">Stations live</div>
                        </div>
                        <div>
                            <div className="text-[22px] font-bold">24/7</div>
                            <div className="text-muted-foreground text-xs">Monitoring</div>
                        </div>
                    </div>
                </div>

                <div className="text-muted-foreground relative text-xs">© 2026 Master Platform</div>
            </div>
        </div>
    );
}
