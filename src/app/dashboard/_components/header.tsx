import { ChevronsUpDown, SearchIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

import { Logo } from '@/components/logo'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export const Header = () => {
  return (
    <header className="fixed top-0 z-50 flex w-full flex-col border-b bg-neutral-8 bg-[url('/assets/bg.png')] bg-center">
      <div className="grid w-full grid-cols-4 flex-row items-center justify-between gap-7 p-6">
        <Logo />

        <div className="col-span-2 hidden flex-row items-center rounded-md border-2 border-secondary px-1 shadow-sm lg:flex">
          <Button variant="ghost" size="icon">
            <SearchIcon className="size-5 text-muted-foreground" />
          </Button>
          <Input
            className="border-none"
            placeholder="Search questions, profiles, doubts..."
          />
        </div>

        <div className="hidden flex-row items-center gap-5 lg:flex xl:justify-self-end">
          <Button variant="theme" asChild>
            <Link href="/create-question">Create a Question</Link>
          </Button>
          <div className="flex flex-row items-center gap-3">
            <Button variant="ghost" className="aspect-auto gap-2 py-6">
              <Avatar className="h-8 w-8">
                <AvatarImage
                  src="https://github.com/gustavogarciac.png"
                  alt="Gustavo Garcia"
                />
                <AvatarFallback>G</AvatarFallback>
              </Avatar>

              <ChevronsUpDown className="text-muted-foregroudn size-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
