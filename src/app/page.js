"use client"
import React from "react";
import { Nav } from "./components/nav"
import { About } from "./components/about"
import { UserSection } from "./components/users"
import { Reviews } from "./components/reviews";
export default function Home() {
  return (
    <body>
      <main>
        <Nav />
        <About />
        <UserSection />
        <Reviews></Reviews>
      </main>
      
    </body>
  )
}
