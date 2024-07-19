import Image from 'next/image'
import React from 'react'

import { Logo } from '@/components/logo'

export const AppCard = () => {
  return (
    <div className="from-accents-1 via-accents-2 to-accents-6 relative z-10 mx-auto flex min-h-[13rem] w-full flex-col items-center justify-center rounded-3xl bg-gradient-to-r p-px">
      <div className="bg-neutral-4 absolute bottom-1 left-28 right-28 top-1 z-20 rounded-3xl" />
      <div className="bg-neutral-5 absolute bottom-3 left-16 right-16 top-2 z-30 rounded-3xl" />
      <div className="bg-neutral-6 absolute bottom-5 left-1 right-1 top-1 z-40 space-y-3 rounded-3xl p-5">
        <Logo showAt size={'sm'} />

        <p className="text-sm text-muted-foreground lg:text-xs xl:text-sm">
          Unleash the power of yours within Quizzit. Upgrade your productivity,
          cognition and self development, It will make you go to the next level.
        </p>
      </div>
      <div className="absolute bottom-1 left-1 right-1 top-1 overflow-hidden">
        <Image
          className="pointer-events-none"
          src={'/assets/stars.svg'}
          fill
          alt=""
        />
      </div>
    </div>
  )
}
