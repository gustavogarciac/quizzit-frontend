import Image from 'next/image'
import React from 'react'

import { Meteors } from '@/components/ui/meteors'

export const HeroBanner = () => {
  return (
    <div className="from-accents-1 via-accents-2 to-accents-6 relative z-10 mx-auto flex min-h-[30rem] w-full max-w-5xl flex-col items-center justify-center rounded-3xl bg-gradient-to-r p-px">
      <div className="bg-neutral-4 absolute bottom-1 left-28 right-28 top-1 rounded-3xl" />
      <div className="bg-neutral-5 absolute bottom-8 left-16 right-16 top-2 rounded-3xl" />
      <div className="bg-neutral-6 absolute bottom-14 left-1 right-1 top-1 rounded-3xl" />
      <div className="absolute bottom-1 left-1 right-1 top-1 overflow-hidden">
        <Meteors />
        <Image className="" src={'/assets/stars.svg'} fill alt="" />
      </div>
    </div>
  )
}
