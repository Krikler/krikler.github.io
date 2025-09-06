"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Info } from "lucide-react";
import { useState } from "react";

export default function Education() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <section id="education" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Education
        </h2>
      </div>
      {/* Visible section title */}
      <h2 className="text-3xl font-bold mb-4 lg:block hidden">Education</h2>
      <Card className="lg:p-6 mb-4 flex flex-col w-full min-h-fit gap-0 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200">
        <CardHeader className="p-0 mb-2">
          <CardTitle className="text-base text-slate-400 whitespace-nowrap">
            2023 — present
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col p-0">
          <p className="text-foreground font-bold">
            Budapest University of Technology and Economics
          </p>
          <CardDescription className="py-3 text-muted-foreground">
            Computer Engineering BSc.
          </CardDescription>
          <CardFooter className="p-0 flex flex-wrap gap-2 items-center">
            <Badge variant="secondary">
              Credit Index: 4.98
              <span
                className="ml-2 relative"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                tabIndex={0}
              >
                <Info className="inline h-4 w-4 text-muted-foreground cursor-pointer" />
                {showTooltip && (
                  <span className="absolute left-6 top-1/2 -translate-y-1/2 z-10 whitespace-nowrap rounded bg-background px-2 py-1 text-xs shadow border border-muted-foreground">
                    Weighted credit index average
                  </span>
                )}
              </span>
            </Badge>
          </CardFooter>
        </CardContent>
      </Card>
    </section>
  );
}
