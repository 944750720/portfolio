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
                After graduating with an Electrical Engineering bachelor&apos;s degree in{" "}
                <span className="font-bold">South China University of Technology</span>, I decided to pursue my

                passion for {" "}
                <span className="font-bold">programming and dream of studying abroad in Japan</span>.
                Even thought the coronavirus pandemic was raging, I still quitted my job in order to prepare for the test of Japanese University Master Entrance Examination.{" "}
                And I got admitted to Department of EEIS, <span className="font-bold">The University of Tokyo</span>.{" "}
                <span className="italic">My research is about radar and unsupervised machine learning</span>.
                This experience has deepened my understanding of Japanese culture and broadened my international perspective. {" "}
                My core stack is{" "}
                <span className="font-bold">
                    Python and TypeScript.
                </span>{" "}
                I am always looking to
                learn new technologies, e.g.,
                <span className="font-bold">
                    LLM and RAG.
                </span>{" "}
                I am currently aiming to become a{" "}
                <span className="font-bold">full-stack engineer</span>.
            </p>
        </motion.section>
    )
}
