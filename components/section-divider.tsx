import React from 'react'
import * as motion from 'framer-motion/client'

export default function SectionDivider() {
  return (
    <motion.div className='bg-gray-200 my-24 h-16 w-1 rounded-full hidden sm:block'
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    ></motion.div>
  )
}
