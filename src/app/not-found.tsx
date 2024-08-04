import Link from 'next/link'

import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-w-screen relative flex min-h-screen flex-col items-center justify-center gap-5 overflow-hidden bg-neutral-7 bg-[url('/assets/stars.svg')] md:gap-10">
      <Logo />

      <div className="flex min-h-36 w-fit flex-col items-center justify-center gap-10 bg-[url('/assets/bg.png')] p-10">
        <h1 className="text-center font-grotesk text-[2.5rem] font-extrabold leading-[2.75rem] sm:text-[3.25rem] sm:leading-[3.5rem] md:w-2/3 md:text-[4rem] md:leading-[4.25rem]">
          Hmm. I could not found what you were searching for...
        </h1>
        <Button variant="theme" asChild>
          <Link href="/dashboard">
            <span>Get back to home</span>
          </Link>
        </Button>
      </div>

      <div className="pointer-events-none absolute left-60 top-[33%] h-40 w-40 rounded-full bg-gradient-to-tr from-accents-4 via-accents-4 to-accents-5 blur-xxl" />

      <div className="pointer-events-none absolute left-1/2 right-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-gradient-to-tr from-accents-1 via-accents-6 to-accents-5 blur-xxl" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-40 w-40 rounded-full bg-gradient-to-tr from-accents-1 via-accents-3 to-accents-2 blur-xxl" />
    </div>
  )
}
