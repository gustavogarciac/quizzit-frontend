import Image from 'next/image'
import React from 'react'

import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'

import { HeroBanner } from './_components/hero-banner'
import { HeroWidget } from './_components/hero-widget'

export const HeroSection = () => {
  return (
    <Container>
      <div className="relative mt-28 space-y-24 bg-[url('/assets/bg.png')] bg-center">
        {/* Hero Title */}
        <div className="space-y-5">
          <div className="relative mx-auto w-fit">
            <h1 className="text-center text-[3.5rem] font-semibold leading-[4rem] tracking-tight">
              Explore possibilities and <br /> be an outstanding student with
              <div className="relative ml-3.5 inline-block">
                {' '}
                Quizzit
                <Image
                  src={'/assets/curve.png'}
                  width={150}
                  height={10}
                  alt="curve"
                  className="ml-auto"
                />
              </div>
            </h1>
          </div>

          <p className="mx-auto max-w-[70%] text-center text-lg text-muted-foreground">
            Unleash the power of yours within Quizzit. Upgrade your
            productivity, cognition and self development, It will make you go to
            the next level.
          </p>
        </div>

        <div className="flex items-center justify-center">
          <Button
            size="lg"
            className="hover:text-accents-1 rounded-tr-[15px] font-code text-sm font-bold uppercase"
          >
            Get started
          </Button>
        </div>

        <div className="mt-10">
          <HeroBanner />
        </div>

        <div className="from-accents-1 via-accents-6 to-accents-5 blur-xxl pointer-events-none absolute left-1/2 right-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-gradient-to-tr" />

        <div className="from-accents-4 via-accents-4 to-accents-5 blur-xxl pointer-events-none absolute left-60 top-[33%] h-40 w-40 rounded-full bg-gradient-to-tr" />

        <HeroWidget />
      </div>
    </Container>
  )
}
