
"use client";

import React from "react";
import SplashCursor from "@/components/SplashCursor";
import HomeSection from "@/components/HomeSection";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
        {/* <SplashCursor /> */}
        <section id="home"><HomeSection/></section>
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
    </>
  );
}
