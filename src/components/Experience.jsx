"use client"

import Heading from "./sub/Heading"
import Image from "next/image"
import { arrowLeftIcon, experienceData } from "@/app/assets"

const Experience = () => {
  const date = new Date().getFullYear()
  return (
    <div  className="relative py-20 px-96">
      <Heading text={"Experience & Education"}/>
      <Image src={"/skills/Education.svg"} alt="Experience Image"  width={400} height={400} className="absolute -top-4 right-96 opacity-70 lg:hidden"  /> 
      <div className="w-full h-full flex flex-col items-center justify-center gap-y-10 lg:gap-y-20 py-10">
        {experienceData.map((data,i)=>(
          <div key={`id-${i}`} className="w-[600px] xl:w-[480px] sm:w-full  px-12 sm:px-0 relative -left-[300px]">
          <div className="relative flex flex-col gap-y-3 rounded-md border border-red-300 bg-white p-4 tracking-wide sm:text-sm">
          <h1 className="text-xl sm:text-lg font-light text-gray-700">{data.designation}</h1>
          <p className="text-gray-800">
                    <span className="block font-light">Company:</span>
                    <span className="block pl-2 font-extralight">{data.company}</span>
          </p>
          <div className="text-gray-800">
                    <span className="font-light" >Experience:</span>
                    <ul className="pl-2">
                      {data.responsibilities.map((rep,j)=>(
                        <li key={j} className="my-1 font-extralight">{rep}</li>
                      ))}
                        
                    </ul>
                    
                </div>
                <span className="absolute top-20 left-full text-red-300 aspect-square">{arrowLeftIcon}</span>
 
          </div>
          <div className="w-[13rem] mx-2 absolute top-20   left-full border border-gray-300 rounded-full   text-red-400 font-light">{data.period}</div>
        </div>
          
        ))}
        
        <div className="absolute w-1 h-full rounded-full bg-gray-300"></div>
      </div>

    </div>
  )
}

export default Experience

