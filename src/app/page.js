"use client";
import Image from "next/image";
import { Inter } from "next/font/google";

import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Works,
  Navbar,
  StarsCanvas,
  Tech,
} from "./components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}
