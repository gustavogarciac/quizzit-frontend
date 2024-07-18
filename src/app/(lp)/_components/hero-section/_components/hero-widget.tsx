'use client'

import { motion, useScroll } from 'framer-motion'
import { HouseIcon, Paperclip, Plus, Search } from 'lucide-react'
import React from 'react'

export const HeroWidget = () => {
  const { scrollYProgress } = useScroll()
  return (
    <motion.div
      className="border-neutral-6 bg-neutral-5 hidden w-fit flex-row gap-4 rounded-md border bg-opacity-20 bg-clip-padding p-5 backdrop-blur-xl backdrop-filter"
      style={{ scaleY: scrollYProgress }}
    >
      <HouseIcon className="text-neutral-1 size-5" />
      <Paperclip className="text-neutral-1 size-5" />
      <Search className="text-neutral-1 size-5" />
      <Plus className="text-neutral-1 size-5" />
    </motion.div>
  )
}
