import * as React from "react";

import { cn } from "../../lib/utils";
import { Label } from "../../atoms/Label";

export interface FieldProps extends React.ComponentProps<"div"> {
    label: React.ReactNode;
    htmlFor: string;
    labelSuffix?: React.ReactNode;
}

function Field({ label, htmlFor, labelSuffix, children, className, ...props }: FieldProps) {
    return (
        <div data-slot="field" className={cn("flex flex-col gap-1.5", className)} {...props}>
            <div className="flex items-center justify-between">
                <Label htmlFor={htmlFor}>{label}</Label>
                {labelSuffix}
            </div>
            {children}
        </div>
    );
}

export { Field };
