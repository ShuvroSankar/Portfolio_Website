'use client'
import Image from "next/image"
import Heading from "./sub/Heading"
import { skillsData } from "@/app/assets"
const Skills = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-y-20 px-96">
      <Heading text={'Skills'}/>
      <div className="w-full flex justify-between flex-wrap gap-x-8 gap-y-10 lg:gap-y-6">
        {skillsData.map((item,i)=>(
            <div key={i} className="flex items-center justify-center gap-x-3 rounded-xl border border-yellow-500 bg-zinc-200 px-5 lg:px-2">
            <Image 
            src={item.icon} 
            alt='Skills image' 
            width={100} 
            height={100} 
            />
            {/* <p className="text-sm text-gray-600">ReactJS</p> */}
    
            </div>
        ))}
        
      </div>
    </div>
  )
}

export default Skills


// personal-portfolio\public\skills\react.png