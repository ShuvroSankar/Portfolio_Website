"use client"

import Image from "next/image"
import Heading from "./sub/Heading"


const Experiments = () => {
  return (
    <div className="my-20 px-96">
      <Heading text={'Experiments'}/>
      <div className="flex flex-col items-center justify-center">
        <div className="relative w-[800px] lg:w-[600px] md:w-[96%] sm:w-[280px] h-[500px] lg:h-[450px] md:h-[400px] sm:h-[600px] flex items-center justify-center">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-y-7 lg:gap-y-4 border border-yellow-500 bg-zinc-50 p-14 lg:p-5 rounded-xl">
                <Image 
                src='/skills/esp32.png' 
                alt="Experiment Images" 
                width={130} 
                height={130}
                className="w-[130px] aspect-square rounded-full border border-yellow-500 p-4 object-contain" />
                <h1 className="text-2xl md:text-xl text-center tracking-wider text-yellow-600 ">ESP32 something...</h1>
                <p className="text-lg md:text-sm text-center font-extralight tracking-wide text-gray-600 first-letter:pl-2">"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni vel eum a reprehenderit dolorum, dicta totam qui quod doloremque quis, veritatis ut fugit enim natus ipsum animi dolore voluptates quidem?"</p>
                <div className="">
                    <span>4.5</span>
                    <div>
                        <span>Stars</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex gap-x-4 text-4xl text-yellow-500">
            <button>Left</button>
            <button>Right</button>
        </div>
      </div>
    </div>
  )
}

export default Experiments
