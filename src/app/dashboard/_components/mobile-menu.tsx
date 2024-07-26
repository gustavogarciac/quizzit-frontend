import { ChevronsUpDown, MenuIcon, XIcon } from 'lucide-react'
import React from 'react'

import { Logo } from '@/components/logo'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet'
import {
  lowerNavigationItems,
  upperNavigationItems,
} from '@/consts/navigation-items'

import { NavigationItem } from './navigation-item'

export const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild className="lg:hidden">
        <Button variant="theme">
          <MenuIcon className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent
        disableSheetClose
        className="flex w-full flex-col bg-neutral-8 bg-[url('/assets/bg.png')] bg-center p-0"
      >
        <SheetHeader className="flex flex-row items-end justify-between gap-1 border-b px-4 py-3">
          <Logo />

          <SheetClose asChild>
            <Button variant="ghost" className="m-0 w-fit px-2 py-1">
              <XIcon className="size-5" />
            </Button>
          </SheetClose>
        </SheetHeader>

        <div className="flex w-full flex-1 flex-col gap-2 p-4">
          {upperNavigationItems.map((item, index) => (
            <NavigationItem
              key={`mobile-nav-item-${index}-${item.title}`}
              href={item.href}
              icon={item.icon}
              title={item.title}
            />
          ))}

          <div className="h-px w-full border" />

          {lowerNavigationItems.map((item, index) => (
            <NavigationItem
              key={`mobile-nav-item-${index}-${item.title}`}
              href={item.href}
              icon={item.icon}
              title={item.title}
            />
          ))}

          <div className="mt-auto flex flex-row justify-between gap-2 rounded-lg border bg-neutral-7 p-3">
            <Avatar>
              <AvatarImage
                src="https://github.com/gustavogarciac.png"
                alt="Gustavo's Picture"
              />
              <AvatarFallback>G</AvatarFallback>
            </Avatar>

            <div className="flex flex-1 flex-col justify-start gap-px">
              <span className="truncate font-grotesk text-sm font-semibold text-primary">
                Gustavo Garcia
              </span>
              <span className="truncate text-xs text-muted-foreground">
                gustavo@email.com
              </span>
            </div>

            <Button variant="ghost" size="icon">
              <ChevronsUpDown className="size-5 text-muted-foreground" />
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
