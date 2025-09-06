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

const hobbies = [
  { name: "FPV Drones", description: "Flying and building FPV drones." },
  { name: "CAD, 3D Printing", description: "I enjoy designing 3D models in FreeCAD, and printing them with my Bambu Lab A1 printer." },
  { name: "Kayaking, Cycling", description: "Sports were always a part of my life." },
];

export default function Hobbies() {
  return (
    <section id="hobbies" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Hobbies
        </h2>
      </div>
      {/* Visible section title */}
      <h2 className="text-3xl font-bold mb-4 lg:block hidden">Hobbies</h2>
      <div className="flex flex-col gap-4">
        {hobbies.map((hobby, idx) => (
          <Card
            key={hobby.name}
            className="lg:p-6 flex flex-col w-full min-h-fit gap-0 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200"
          >
            <CardHeader className="p-0 mb-2">
              <CardTitle className="text-base text-primary">{hobby.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col p-0">
              <CardDescription className="py-1 text-muted-foreground">
                {hobby.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
