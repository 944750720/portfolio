"use client"

import React, { useRef } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';
import Image from 'next/image';
import { projectsData } from '@/lib/data';

type ProjectProps = typeof projectsData[number];

export default function Project({ title, description, tags, imageUrl, href }: ProjectProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.03 1"]
    })
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1])
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])
    return (
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress
            }}
            className='group mb-3 sm:mb-8 last:mb-0'
        >
            <section
                className='group bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[34rem] group-even:pl-8 hover:bg-gray-200 transition mb-3 sm:mb-8 last:mb-0'>
                <div className='pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:group-odd:mr-0 sm:group-odd:ml-0 sm:max-w-[50%] flex flex-col h-full group-even:ml-[21rem] sm:group-even:ml-[21rem] group-even:mr-[0rem] group-odd:mr-[18rem] group-odd:ml-[7rem]'>
                    <h3 className='text-2xl font-semibold'>{title}</h3>
                    <p className='mt-2 leading-relaxed text-gray-700'>{description}</p>
                    <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
                        {tags.map((tag, index) => (
                            <li key={index} className='bg-black/[0.7] px-3 py-1 text-[0.7rem] tracking-wider text-white rounded-full'>{tag}</li>
                        ))}
                    </ul>
                </div>

                <a href={href} target="_blank" className="block !cursor-pointer">
                    <Image src={imageUrl} alt="Project I worked on" quality={95} className='absolute top-8 -right-44 w-[28.25rem] rounded-t-lg shadow-2xl
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2
        group-even: bg-white/25
        group-even:right-[initial] transition
        group-even:-left-32'
                    />
                </a>
            </section>
        </motion.div>
    )
}