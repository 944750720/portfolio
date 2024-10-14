"use client";

import Image from 'next/image'
import React from 'react'
import * as motion from 'framer-motion/client'
import Link from 'next/link'
import { BsArrowRight, BsGithub, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { useSectionInView } from '@/lib/hooks';

export default function Intro() {
    const { ref, inView } = useSectionInView("Home");

    return (
        <section ref={ref} className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]' id="home">
            <div className="flex items-center justify-center">
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: 'spring',
                            stiffness: 125,
                            damping: 25,
                            mass: 0.5,
                        }}
                    >
                        <Image src="https://files.catbox.moe/sis1yu.jpeg"
                            alt="Chen Hongji\'s portrait"
                            width={192}
                            height={192}
                            quality={95}
                            priority={true}
                            className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
                        />
                    </motion.div>
                    <motion.span
                        className='absolute bottom-0 right-0 text-4xl'
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            delay: 0.5,
                            type: 'spring',
                            stiffness: 125,
                            damping: 25,
                            mass: 0.5,
                        }}
                    >
                        😎
                    </motion.span>
                </div>
            </div>

            <motion.p className='mb-10 mt-4 px-4 text-xl font-medium !leading-[1.5] sm:text-xl'
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
            >
                <span className="font-bold">Hello, I&apos;m Chen Hongji👋, </span> {" "}
                graduating from {" "}
                <span className="font-bold">The University of Tokyo.</span> {" "}
                I&apos;m a {" "}
                <span className="font-bold">Software Engineer</span> {" "}
                with{" "}
                <span className="font-bold">1 year of internship experience in Tokyo</span>
                , mainly working remotely.
                I enjoy {" "}<span className="font-bold">programming</span>
                , gaming, traveling, cooking, and watching soccer.
                My focus is on {" "}
                <span className="underline">Python, TypeScript.</span>
                , and I have experience with {" "}
                <span className="font-bold">LLM and RAG development.</span>
            </motion.p>

            <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    delay: 0.4,
                }}
            >
                <Link href="#contact" className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:bg-gray-950 hover:scale-110 active:scale-105 transition border border-black/10'>Contact me here <BsArrowRight
                    className='opacity-70 group-hover:translate-x-2 transition' />
                </Link>

                <a href='/CV.pdf' download className='group bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full outline-none hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10'>
                    Download CV
                    <HiDownload className='opacity-60 group-hover:translate-y-1 transition' />
                </a>

                <a href="https://www.linkedin.com/in/hongji-chen-4b58a2209/" target='_blank' className='group bg-white text-gray-700 px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10'>
                    <BsLinkedin />
                </a>

                <a href="https://github.com/944750720" target='_blank' className='group bg-white text-gray-700 px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10'>
                    <BsGithub />
                </a>
            </motion.div>
        </section>
    )
}
