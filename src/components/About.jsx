'use client'

import Heading from "./sub/Heading"
import Achievements from "./sub/Achievements"
import Image from "next/image"
import { aboutData, aboutText, downloadLineIcon, arrowLeftSFillIcon } from "@/app/assets"

const About = () => {
  return (
    <div className="min-h-screen px-96 flex flex-col items-center justify-center">
      <Heading text={"About Me"}/>
      <div className="w-full flex items-center justify-between md:justify-center ">
        <Image src={'/skills/about_me.svg'} alt="About Image" width={400} height={400} className="w-[300px] lg:w-[200px] md:hidden"/>
        <div className="max-w-[800px] rounded-xl bg-zinc-100 p-5 text-justify">
            <span className="absolute -left-5 top-20 scale-[2.5] text-zinc-100 md:hidden">{arrowLeftSFillIcon}</span>
            <p className="text-lg font-light text-gray-700 first-letter:pl-3 lg:text-[16px]">{aboutText}</p>
            <a href="/skills/Shuvro_Sankar_Sen_CV.pdf" download="" className="w-max flex items-center gap-x-2 mt-6 rounded-full border border-gray-300 bg-red-400 px-3 py-2 font-light text-white hover:bg-red-500 transition-colors">
            <span>Download CV</span>
            <span className="text-xl">{downloadLineIcon}</span>
            </a>
        </div>
      </div>
      <div className="mt-20 w-full flex flex-wrap
       items-center justify-center gap-x-7 gap-y-10 ">
        
            {aboutData.map((item,i)=>(
              <Achievements key={i} title = {item.title} amount = {item.amount}>
                {item.icon}
              </Achievements>
              
            ))}
            
        </div>
    </div>
  )
}

export default About
// personal-portfolio\public\skills\about_me.svg