import { SearchIcon } from 'lucide-react'
import React from 'react'

import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export const Header = () => {
  return (
    <header className="flex w-full flex-col border-b bg-neutral-8 bg-[url('/assets/bg.png')] bg-center">
      <div className="grid w-full grid-cols-4 flex-row items-center justify-between gap-5 p-6">
        <Logo />

        <div className="col-span-2 flex flex-row items-center rounded-md border-2 border-secondary px-1 shadow-sm">
          <Button variant="ghost" size="icon">
            <SearchIcon className="size-5 text-muted-foreground" />
          </Button>
          <Input
            className="border-none"
            placeholder="Search questions, profiles, doubts..."
          />
        </div>

        <div className="flex flex-row items-center gap-5 justify-self-end">
          <button className="btn btn-primary">Create</button>
          <button className="btn btn-secondary">Profile</button>
        </div>
      </div>

      {/* <div className="w-full bg-neutral-5 px-6 py-4">
        <div className="mx-auto flex max-w-[1250px] flex-row items-center gap-4">
          <HeaderNavigation />
        </div>
      </div> */}
    </header>
  )
}
