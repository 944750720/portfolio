"use client";

import React from 'react';
import SectionHeading from './section-heading';;
import { projectsData } from '@/lib/data';
import Project from './project';
import { useSectionInView } from '@/lib/hooks';



export default function Projects() {
    const { ref, inView } = useSectionInView("Projects", 0.15);

    return (
        <section ref={ref} id="projects" className='scroll-mt-28'>
            <SectionHeading>My Projects</SectionHeading>
            <div>
                {
                    projectsData.map((projct, index) => (
                        <React.Fragment key={index}>
                            <Project {...projct} />
                        </React.Fragment>
                    ))
                }
            </div>
        </section>
    )
};

