import { Button } from '@/components/ui/button'

import { HeroWidget } from './_components/hero-widget'

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl">
      <div className="relative mt-20 space-y-7 bg-[url('/assets/bg.png')] bg-center">
        <h1 className="text-center text-[3.5rem] font-semibold leading-[4rem] tracking-tight">
          Explore possibilities and <br /> be an outstanding student with
          Quizzit
        </h1>

        <p className="mx-auto max-w-[70%] text-center text-lg text-muted-foreground">
          Unleash the power of yours within Quizzit. Upgrade your productivity,
          cognition and self development, It will make you go to the next level.
        </p>

        <div className="flex items-center justify-center">
          <Button
            size="lg"
            className="hover:text-accents-1 rounded-tr-[15px] font-code text-sm font-bold uppercase"
          >
            Get started
          </Button>
        </div>

        <div className="from-accents-1 via-accents-6 to-accents-5 blur-xxl pointer-events-none absolute bottom-0 left-1/2 right-1/2 h-40 w-40 -translate-x-1/2 -translate-y-[-100px] rounded-full bg-gradient-to-tr" />

        <HeroWidget />
      </div>
    </main>
  )
}
