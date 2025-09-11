"use client";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function AutonomousDroneProject() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-md px-6 py-12 md:px-12 md:py-20 lg:px-24">
      <Link href="/" className="mb-8 inline-block">
        <Button variant="outline">&larr; Back to Main Page</Button>
      </Link>
      <section className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Autonomous Drone with Raspberry Pi</h1>
        <p className="text-muted-foreground mb-4">
          Hobby Project &middot; 2025
        </p>
        <div className="mb-6">
          <Image
            src="/autonomous_drone_right_front.jpg"
            alt="Autonomous Drone"
            width={900}
            height={500}
            className="rounded-lg border border-muted-foreground"
            priority
          />
        </div>
        <div className="flex flex-wrap gap-2 mb-6">
          <Badge>Ardupilot</Badge>
          <Badge>Mavlink</Badge>
          <Badge>Mavros</Badge>
          <Badge>ROS2</Badge>
          <Badge>C++</Badge>
          <Badge>Raspberry Pi</Badge>
        </div>
        <h2 className="text-2xl font-semibold mb-2">Project Overview</h2>
        <p className="mb-4">
          This project aims to build an autonomous drone using a Raspberry Pi as the companion computer.
          I built the drone myself from scratch, including 3D designing and printing custom parts.
        </p>
        <h3 className="text-xl font-semibold mb-2">Key Features</h3>
        <ul className="list-disc list-inside mb-4">
          <li>The drone is capable of flying without any human control</li>
          <li>The flight controller gets mission commands from the Raspberry Pi using the MAVLink protocol</li>
          <li>ROS2 Jazzy runs on the Raspberry Pi</li>
          <li>Real-time video streaming and telemetry</li>
        </ul>
        {/* Specification Section */}
        <h2 className="text-2xl font-semibold mb-2">Specification</h2>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-[300px] w-full border border-muted-foreground rounded-lg text-left">
            <tbody>
              <tr className="border-b border-muted-foreground">
                <th className="py-2 px-4 font-semibold bg-muted">Flight Controller</th>
                <td className="py-2 px-4">Speedybee F405 v4 FC&ESC Stack</td>
              </tr>
              <tr className="border-b border-muted-foreground">
                <th className="py-2 px-4 font-semibold bg-muted">Flight Controller Firmware</th>
                <td className="py-2 px-4">Ardupilot</td>
              </tr>
              <tr className="border-b border-muted-foreground">
                <th className="py-2 px-4 font-semibold bg-muted">Companion Computer</th>
                <td className="py-2 px-4">Raspberry Pi 5 16GB</td>
              </tr>
              <tr className="border-b border-muted-foreground">
                <th className="py-2 px-4 font-semibold bg-muted">Raspberry Pi Operating System</th>
                <td className="py-2 px-4">Ubuntu 24.04</td>
              </tr>
              <tr className="border-b border-muted-foreground">
                <th className="py-2 px-4 font-semibold bg-muted">Frame</th>
                <td className="py-2 px-4">Mark4 7 inch</td>
              </tr>
              <tr className="border-b border-muted-foreground">
                <th className="py-2 px-4 font-semibold bg-muted">Receiver</th>
                <td className="py-2 px-4">SpeedyBee Nano 2.4G ExpressLRS ELRS Receiver</td>
              </tr>
              <tr className="border-b border-muted-foreground">
                <th className="py-2 px-4 font-semibold bg-muted">Motors</th>
                <td className="py-2 px-4">Antonel A2807-1300KV</td>
              </tr>
              <tr className="border-b border-muted-foreground">
                <th className="py-2 px-4 font-semibold bg-muted">Propellers</th>
                <td className="py-2 px-4">HQProp 7x4x3</td>
              </tr>
              <tr className="border-b border-muted-foreground">
                <th className="py-2 px-4 font-semibold bg-muted">Battery</th>
                <td className="py-2 px-4">CNHL 4s Lipo Battery 2200mAh 22.2V 70C</td>
              </tr>
              <tr className="border-b border-muted-foreground">
                <th className="py-2 px-4 font-semibold bg-muted">GPS</th>
                <td className="py-2 px-4">MATEKSYS GNSS & Compass M10Q-5883</td>
              </tr>
              <tr className="border-b border-muted-foreground">
                <th className="py-2 px-4 font-semibold bg-muted">Optical Flow & Range Finder Lidar Sensor</th>
                <td className="py-2 px-4">MicoAir MTF-01</td>
              </tr>
              <tr>
                <th className="py-2 px-4 font-semibold bg-muted">Weight</th>
                <td className="py-2 px-4">~900g</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3 className="text-xl font-semibold mb-2">Technologies Used</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Raspberry Pi 5 with Ubuntu 24.04</li>
          <li>Ardupilot, Mavlink, Mavros</li>
          <li>ROS2 (Robot Operating System)</li>
          <li>C++</li>
          <li>Custom 3D-printed parts</li>
        </ul>
        {/* Detailed Description Section */}
        <h2 className="text-2xl font-semibold mb-2">Detailed Description</h2>
        <div className="mb-6">
          <p className="mb-2">
            This drone is built like a 7-inch long-range FPV drone, but it is equipped with a Raspberry Pi as a companion computer so it can perform autonomous flights.
            I built the drone from scratch with parts that I ordered from AliExpress. I designed some custom parts in FreeCAD and printed them with my Bambu Lab A1 3D printer.
            The flight controller runs Ardupilot firmware, which I chose because it has good support for autonomous flight.
          </p>
          <p className="mb-2">
            The Raspberry Pi communicates with the flight controller using the MAVLink protocol, which enables the drone to send telemetry data and receive mission commands.
            The Raspberry Pi runs ROS2 (Robot Operating System) with the Mavros package, which provides a ROS interface for MAVLink.
            I have written custom ROS2 nodes in C++ to handle the autonomous flight logic, including takeoff, waypoint navigation, and landing.
            The drone is also equipped with a GPS module for outdoor navigation and an optical flow sensor for stable low-altitude flights.
          </p>
          <p className="mb-2">
            I have faced several challenges during this project, so I am proud that I managed to solve them. Throughout the project, I have learned a lot about FPV drones and ROS.
            In the future, I plan to add a camera to the drone so I can run some computer vision algorithms on the Raspberry Pi.
          </p>
        </div>
        <h3 className="text-xl font-semibold mb-2">Gallery</h3>
        <div className="flex flex-col gap-4">
          <Image
            src="/autonomous_drone_right_front.jpg"
            alt="Drone right front"
            width={900}
            height={500}
            className="rounded-lg border border-muted-foreground"
          />
          <Image
            src="/autonomous_drone_up.jpg"
            alt="Drone top view"
            width={900}
            height={500}
            className="rounded-lg border border-muted-foreground"
          />
          <Image
            src="/autonomous_drone_front.jpg"
            alt="Drone front view"
            width={900}
            height={500}
            className="rounded-lg border border-muted-foreground"
          />
          <Image
            src="/autonomous_drone_right_side.jpg"
            alt="Drone right side view"
            width={900}
            height={500}
            className="rounded-lg border border-muted-foreground"
          />
          <Image
            src="/autonomous_drone_right_up.jpg"
            alt="Drone right up view"
            width={900}
            height={500}
            className="rounded-lg border border-muted-foreground"
          />
          <Image
            src="/autonomous_drone_with_raspberry.jpg"
            alt="Drone with Raspberry Pi"
            width={900}
            height={500}
            className="rounded-lg border border-muted-foreground"
          />
          <Image
            src="/raspberry.jpg"
            alt="Raspberry Pi"
            width={900}
            height={500}
            className="rounded-lg border border-muted-foreground"
          />
        </div>
      </section>
      <div className="mt-8">
        <Link href="/">
          <Button variant="default">&larr; Back to Main Page</Button>
        </Link>
      </div>
    </div>
  );
}
