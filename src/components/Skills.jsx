'use client'
import Image from "next/image"
import Heading from "./sub/Heading"
import { skillsData } from "@/app/assets"
import { motion } from "framer-motion"

const Skills = () => {
    const variants = {
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.36 + i * 0.07,
            },
        }),
        hidden: {
            opacity: 0,
            y: 30,
        },
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-y-20 px-96">
            <Heading text={'Skills'} />
            <div className="w-full flex justify-between flex-wrap gap-x-8 gap-y-10 lg:gap-y-6">
                {skillsData.map((item, i) => (
                    <motion.div
                        custom={i}
                        variants={variants}
                        initial="hidden"
                        whileInView="visible"
                        whileHover={{scale:1.1}}
                        viewport={{ once: true, amount: 0.5 }} // viewport configuration
                        key={i}
                        className="flex items-center justify-center gap-x-3 rounded-xl border border-yellow-500 bg-zinc-200 px-5 lg:px-2"
                    >
                        <Image
                            src={item.icon}
                            alt="Skills image"
                            width={100}
                            height={100}
                            priority // Add priority for critical images
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Skills