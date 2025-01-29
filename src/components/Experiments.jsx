"use client"

import Image from "next/image"
import Heading from "./sub/Heading"
import { experimentsData, arrowIcons, starIcons } from "@/app/assets"
import { useEffect, useRef, useState } from "react"
import { animate, motion } from "framer-motion"

const Experiments = () => {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(false)
  const prevIndex = useRef(0)
  const slides = useRef([])

  const rightClickHandler = () => {
    if (slides.current[index] && slides.current[prevIndex.current]) {
      animate(slides.current[index], { x: 0 }, { delay: 0.3 })
      animate(slides.current[prevIndex.current], {
        scale: index === 0 ? 1 : 0.4,
        rotate: index === 0 ? 0 : index % 2 === 0 ? 10 : -10,
      })
    }
  }

  const leftClickHandler = () => {
    if (slides.current[index] && slides.current[prevIndex.current]) {
      animate(slides.current[index], { scale: 1, rotate: 0 }, { delay: 0.2 })
      animate(slides.current[prevIndex.current], { x: '100%' })
    }
  }

  useEffect(() => {
    if (direction) {
      leftClickHandler()
    } else {
      rightClickHandler()
    }
    prevIndex.current = index
  }, [index, direction])

  return (
    <div className="my-20 px-96">
      <Heading text={'Experiments'} />
      <div className="flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, x: -2 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="relative w-[800px] lg:w-[600px] md:w-[96%] sm:w-[280px] h-[500px] lg:h-[450px] md:h-[400px] sm:h-[600px] flex items-center justify-center overflow-hidden"
        >
          {experimentsData.map((experiment, i) => (
            <motion.div
              initial={{ x: '100%' }}
              key={i}
              className="absolute inset-0 flex flex-col items-center justify-center gap-y-7 lg:gap-y-4 border border-yellow-500 bg-zinc-50 p-14 lg:p-5 rounded-xl"
              ref={(el) => (slides.current[i] = el)}
            >
              <Image
                src={experiment.image}
                alt="Experiment Images"
                width={130}
                height={130}
                className="w-[130px] aspect-square rounded-full border border-yellow-500 p-4 object-contain"
              />
              <h1 className="text-2xl md:text-xl text-center tracking-wider text-yellow-600">{experiment.project_name}</h1>
              <p className="text-lg md:text-sm text-center font-extralight tracking-wide text-gray-600 first-letter:pl-2">{experiment.abstract}</p>
              <div>
                <span>4.5</span>
                <div>
                  <span>Stars</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="flex gap-x-4 text-4xl text-yellow-500">
          <button className={`${ index === 0?"opacity-30 pointer-events-none" :"opacity-100 pointer-events-auto" } hover:scale-150 transition-all`}
            onClick={() => {
              if (index > 0) {
                setDirection(true)
                setIndex(index - 1)
              }
            }}
          >
            {arrowIcons[0]}
          </button>
          <button className={`${ index === experimentsData.length-1?"opacity-30 pointer-events-none" :"opacity-100 pointer-events-auto" } hover:scale-150 transition-all`}
            onClick={() => {
              if (index < experimentsData.length - 1) {
                setDirection(false)
                setIndex(index + 1)
              }
            }}
          >
            {arrowIcons[1]}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Experiments