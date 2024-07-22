import Image from 'next/image'
import React from 'react'

import { Meteors } from '@/components/ui/meteors'

export const Banner = () => {
  return (
    <div className="relative z-20 mx-auto hidden min-h-[30rem] w-full max-w-5xl basis-[70%] flex-col items-center justify-center rounded-3xl bg-gradient-to-r from-accents-1 via-accents-2 to-accents-6 p-px lg:flex">
      <div className="absolute bottom-1 left-28 right-28 top-1 rounded-3xl bg-neutral-4" />
      <div className="absolute bottom-8 left-16 right-16 top-2 rounded-3xl bg-neutral-5" />
      <div className="absolute bottom-14 left-1 right-1 top-1 rounded-3xl bg-neutral-6" />
      <div className="absolute bottom-1 left-1 right-1 top-1 overflow-hidden">
        <Meteors />
        <Image className="" src={'/assets/stars.svg'} fill alt="" />
      </div>
    </div>
  )
}
