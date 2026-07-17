import { Button } from "@master-platform/shared-ui";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24">
            <div className="w-full max-w-2xl text-center">
                <h1 className="text-2xl font-bold tracking-tight md:text-4xl">
                    EV Charging Station Management
                </h1>
                <p className="text-muted-foreground mt-4 text-sm md:text-base">
                    Admin dashboard for managing electric vehicle charging operations
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                    <Button size="lg">Get Started</Button>
                    <Button size="lg" variant="outline">
                        Learn More
                    </Button>
                </div>
            </div>
        </main>
    );
}
