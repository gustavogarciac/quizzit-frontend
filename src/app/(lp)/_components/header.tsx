import Link from 'next/link'
import React from 'react'

import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'

import { MobileSidebar } from './mobile-sidebar'

export const Header = () => {
  return (
    <header className="flex items-center justify-between gap-2 border-b px-7 py-6 lg:px-20 lg:py-6">
      <Logo />

      <nav className="hidden flex-row items-center gap-8 md:flex">
        <a
          href="#features"
          className="duration-400 font-code text-xs font-semibold uppercase text-muted-foreground transition-colors ease-linear hover:text-primary"
        >
          Features
        </a>
        <a
          href="#features"
          className="duration-400 font-code text-xs font-semibold uppercase text-muted-foreground transition-colors ease-linear hover:text-primary"
        >
          How to use
        </a>
        <a
          href="#features"
          className="duration-400 font-code text-xs font-semibold uppercase text-muted-foreground transition-colors ease-linear hover:text-primary"
        >
          Roadmap
        </a>
        <a
          href="#features"
          className="duration-400 font-code text-xs font-semibold uppercase text-muted-foreground transition-colors ease-linear hover:text-primary"
        >
          Pricing
        </a>
      </nav>

      <div className="hidden flex-row items-center gap-4 md:flex">
        <Link href="/auth/sign-up">
          <span className="duration-400 font-code text-xs font-semibold uppercase text-muted-foreground transition-colors ease-linear hover:text-primary">
            new account
          </span>
        </Link>

        <Button variant={'theme'}>
          <Link href="/auth/sign-in">Sign In</Link>
        </Button>
      </div>

      <div className="block md:hidden">
        <MobileSidebar />
      </div>
    </header>
  )
}
