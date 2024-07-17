import { MenuIcon, XIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet'

export const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="theme">
          <MenuIcon className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent
        disableSheetClose
        className="bg-neutral-7 w-full bg-[url('/assets/bg.png')] bg-center p-0"
      >
        <SheetHeader className="flex flex-row items-end justify-between gap-1 border-b px-4 py-3">
          <Logo />

          <SheetClose asChild>
            <Button variant="ghost" className="m-0 w-fit px-2 py-1">
              <XIcon className="size-5" />
            </Button>
          </SheetClose>
        </SheetHeader>

        <div className="grid h-full flex-1 items-start justify-center pt-28">
          <nav className="flex flex-col gap-10">
            <a
              href="#features"
              className="text-center font-code text-3xl uppercase tracking-wide text-foreground transition-colors duration-200 ease-out hover:text-muted-foreground"
            >
              Features
            </a>
            <a
              href="#features"
              className="text-center font-code text-3xl uppercase tracking-wide text-foreground transition-colors duration-200 ease-out hover:text-muted-foreground"
            >
              How to use
            </a>
            <a
              href="#features"
              className="text-center font-code text-3xl uppercase tracking-wide text-foreground transition-colors duration-200 ease-out hover:text-muted-foreground"
            >
              Roadmap
            </a>
            <a
              href="#features"
              className="text-center font-code text-3xl uppercase tracking-wide text-foreground transition-colors duration-200 ease-out hover:text-muted-foreground"
            >
              Pricing
            </a>
            <Link
              href="/auth/sign-up"
              className="text-center font-code text-3xl uppercase tracking-wide text-foreground transition-colors duration-200 ease-out hover:text-muted-foreground"
            >
              New account
            </Link>
            <Link
              href="/auth/sign-up"
              className="text-center font-code text-3xl uppercase tracking-wide text-foreground transition-colors duration-200 ease-out hover:text-muted-foreground"
            >
              Sign In
            </Link>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  )
}
