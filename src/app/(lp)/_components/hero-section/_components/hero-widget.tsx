'use client'

import { motion, useScroll } from 'framer-motion'
import { HouseIcon, Paperclip, Plus, Search } from 'lucide-react'
import React from 'react'

export const HeroWidget = () => {
  const { scrollYProgress } = useScroll()
  return (
    <motion.div
      className="hidden w-fit flex-row gap-4 rounded-md border border-neutral-6 bg-neutral-5 bg-opacity-20 bg-clip-padding p-5 backdrop-blur-xl backdrop-filter"
      style={{ scaleY: scrollYProgress }}
    >
      <HouseIcon className="size-5 text-neutral-1" />
      <Paperclip className="size-5 text-neutral-1" />
      <Search className="size-5 text-neutral-1" />
      <Plus className="size-5 text-neutral-1" />
    </motion.div>
  )
}
