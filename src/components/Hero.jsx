"use client"

import Image from "next/image"
import { heroIcons } from "@/app/assets"
import { useMotionValue, useTransform, motion, useSpring, delay } from "framer-motion"
import { useState } from "react"

function Hero() {
  const [windowOffsert, setWindowOffset] = useState({innerWidth:0, innerHeight:0})
  const [mouseMOve, setMouseMove] = useState(false)
  const [buttonHover, setButtonHover] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const handleMouseMove = (e)=>{
    const {clientX, clientY } = e
    x.set(clientX)
    y.set(clientY)
    // console.log(clientX, clientY,x,y);
    
  }

  const handleMouseEnter = ()=>{
    setWindowOffset({innerWidth: window.innerWidth, innerHeight:window.innerHeight})
    setMouseMove(true)
    console.log(innerWidth, innerHeight);
    
  }

  const {innerWidth, innerHeight} = windowOffsert

  const xSpring = useSpring(x, {stiffness:100, damping: 10})
  const ySpring = useSpring(y, {stiffness:100, damping: 10})

  const rotatY = useTransform(xSpring, [0, innerWidth], [-30,30])
  const rotatX = useTransform(ySpring , [0, innerHeight], [10,-50])


    return (
      <div className="h-screen grid place-items-center" onMouseMove={handleMouseMove} onMouseEnter={handleMouseEnter}>
      <div>
        <div className="flex flex-col items-center justify-center gap-y-3 font-light capitalize ">
            <motion.div className="flex items-center justify-center" style={{rotateX: mouseMOve?rotatX:0, rotateY: mouseMOve?rotatY:0, transition:"0.1s"}}>
                <Image src={'Learning-bro.svg'} alt='Person Image' width={400} height={400} priority={true} className="h-auto w-[300px]" />
                <motion.span className="absolute text-3xl font-semibold text-white" initial={{scale:0 }} animate={{opacity: buttonHover?0:1, scale: buttonHover?2:0, y:buttonHover?-40:0}} transition={{opacity: {delay:0.4}}}>Hi</motion.span>
            </motion.div>
            <h1 className="text-center text-3xl font-bold tracking-wider text-gray-500 sm:text-2xl">My name is Shuvro Sankar Sen &</h1>
            <p className="text-lg tracking-wider text-gray-700">I like animatios😎</p>
        </div>
        <div className="mt-8 flex justify-center gap-x-10 text-3xl text-yellow-600 sm:text-2xl">
          {heroIcons.map((icon,i)=>(
            <a hre='#' key={i} className="rounded-lg hover:bg-red-400 hover:text-white transition-colors">{icon}</a>
          ))}
            
        </div>
        <a href="#" className="mx-auto mt-7 block w-max rounded-lg bg-red-400 px-3 py-1 font-light capitalize tracking-wider text-white hover:bg-red-500 transition-colors" onMouseEnter={()=>setButtonHover(true)} onMouseLeave={()=>setButtonHover(false)}>Talk to me</a>
      </div>
      </div>
    )
  }

  export default Hero
  