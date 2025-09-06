"use client";
/* eslint-disable */

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 ">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          About
        </h2>
      </div>
      {/* Visible section title */}
      <h2 className="text-3xl font-bold mb-4 lg:block hidden">About</h2>
      <div className="flex flex-col gap-4">
        <p className="text-start text-muted-foreground lg:px-6">
          I am currently studying <span className="text-white">computer engineering</span>{" "} at Budapest. 
          I have been interested in informatics and engineering from a young age so I attended a gymnasium in a mathematical and informatics specialization, 
          and now I am happy that I can study in this field at university.
          </p>
          <p className="text-start text-muted-foreground lg:px-6">
            I am working part time as a <span className="text-white">junior software developer at E-Group ICT Software Zrt.</span>, 
            where I primarily work with <span className="text-white">Java</span> and <span className="text-white">Spring Boot</span> in back-end development. 
            I gained valuable experience here in modern software development workflows.
          </p>
          <p className="text-start text-muted-foreground lg:px-6">
            In my free time, I enjoy various hobbies such as flying and building FPV drones.
            I have an autonomous drone hobby project where I have built a drone that uses a Raspberry Pi as a companion computer,
            running ROS2 to handle autonomous flight tasks. I also like designing 3D models in FreeCAD and printing them with my Bambu Lab A1 printer.
            I like watching F1 races because I admire the technology and engineering behind the sport.
          </p>
      </div>
    </section>
  );
}