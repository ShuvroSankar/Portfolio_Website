"use client"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Experience from "@/components/Experience"
import Skills from "@/components/Skills"
import Experiments from "@/components/Experiments"
export default function Home(){
  return (
    <div>
      <Hero/>
      <About/>
      <Experience/>
      <Skills/>
      <Experiments/>
    </div>
  )
}