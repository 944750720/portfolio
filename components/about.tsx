"use client";

import React from 'react'
import SectionHeading from './section-heading'
import * as motion from 'framer-motion/client'
import { useSectionInView } from '@/lib/hooks';

export default function About() {
    const { ref, inView } = useSectionInView("About");

    return (
        <motion.section
            ref={ref}
            className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <SectionHeading>About me</SectionHeading>
            <p className='mb-3'>
                After graduating with a Bachelor&apos;s degree in Electrical Engineering from{" "}
                <span className="font-bold">South China University of Technology</span>, I decided to pursue my
                passion for{" "}
                <span className="font-bold">programming and my dream of studying in Japan</span>.
                I left my job to prepare for the Japanese University Master&apos;s Entrance Examination
                and was admitted to the Department of EEIS at{" "}
                <span className="font-bold">The University of Tokyo</span>.{" "}
                <span className="italic">My research focuses on radar signal processing and unsupervised machine learning</span>.
                This journey has deepened my appreciation of Japanese culture and broadened my international perspective.{" "}
                My core tech stack includes{" "}
                <span className="font-bold">
                    Python (RAG, FastAPI) and TypeScript (React.js).
                </span>{" "}
                I am always eager to learn new technologies, such as{" "}
                <span className="font-bold">
                    Node.js, Nest.js, Next.js, and Golang.
                </span>{" "}
                My goal is to become an excellent{" "}
                <span className="font-bold">Full-Stack Engineer</span>.
            </p>
        </motion.section>
    )
}
