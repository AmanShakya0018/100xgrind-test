"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { Button } from "./ui/button";
import { GridBackgroundDemo } from "./Background";
import Appbar from "./Appbar";

function Hero() {
    return (
        <main className="overflow-hidden">
        
       <GridBackgroundDemo/>
       <Appbar/>
        </main>
       
      );
}

export default Hero