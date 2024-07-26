import { ChevronsUpDown, MessageCircle } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  lowerNavigationItems,
  upperNavigationItems,
} from '@/consts/navigation-items'

import { NavigationItem } from './navigation-item'

export const Sidebar = () => {
  return (
    <aside className="fixed bottom-0 top-[96px] z-50 hidden flex-col border-r bg-neutral-8 p-3 lg:flex">
      <div className="flex flex-1 flex-col gap-3">
        {upperNavigationItems.map((item, index) => (
          <NavigationItem
            key={`${index}-${item.title}-${item.href}`}
            icon={item.icon}
            title={item.title}
            href={item.href}
          />
        ))}

        <div className="h-px w-full border" />

        {lowerNavigationItems.map((item, index) => (
          <NavigationItem
            key={`${index}-${item.title}-${item.href}`}
            icon={item.icon}
            title={item.title}
            href={item.href}
          />
        ))}
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-row items-center justify-between gap-3 rounded-lg border bg-neutral-7 p-2">
          <div className="relative">
            <MessageCircle className="size-6 text-muted-foreground" />
            <div className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-accents-4" />
          </div>

          <span className="flex-1 font-code text-sm uppercase">Inbox</span>

          <span className="rounded-md border bg-neutral-7 px-3 py-1">3</span>
        </div>

        <div className="flex flex-row justify-between gap-2 rounded-lg border bg-neutral-7 p-3">
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
    </aside>
  )
}
