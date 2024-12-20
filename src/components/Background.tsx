import React from "react";
import { Button } from "./ui/button";
import { ArrowRightCircleIcon, ArrowRightToLine } from "lucide-react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { InfiniteMovingCardsDemo } from "./MovingIcons";
import Link from "next/link";

export function GridBackgroundDemo() {
  return (
    <div className=" min-h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center ">
      {/* Radial gradient for the container to give a faded look */}
      
    <div className=" absolute pointer-events-none inset-0 flex items-center justify-center  dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className=" relative z-20 flex flex-col items-center justify-between w-full gap-14   p-5"> <p className=" text-4xl sm:text-7xl w-4/5 font-bold text-center  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
      <span className="text-blue-800"> 100xGrind:</span> Build, Share & Grow.  
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
      <Button className="rounded-full font-bold   text-xl p-5">Share Projects</Button>
      <Link href={"/projects"}>
      <Button className="rounded-full font-bold bg-blue-800 hover:bg-blue-900 text-xl text-white p-5 ">Explore Projects <ArrowRightCircleIcon/></Button>
      </Link>
      </div>
       
    </div>
      
    </div>
  );
}
