import {
  AudioWaveform,
  BarChart2,
  BookmarkCheckIcon,
  CableIcon,
  CalendarClock,
  ChevronsUpDown,
  MapIcon,
  MessageCircle,
  MoonIcon,
  Settings,
} from 'lucide-react'
import React from 'react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

export const Sidebar = () => {
  return (
    <aside className="flex h-full flex-col border-r bg-neutral-8 p-3">
      <div className="flex flex-1 flex-col gap-3">
        <div className="flex flex-row items-center gap-2 rounded-lg border border-transparent px-5 py-3 text-muted-foreground transition-colors duration-200 ease-in-out hover:border-border hover:bg-neutral-7">
          <BarChart2 className="size-6" />
          <span className="font-code text-sm font-semibold uppercase">
            Dashboard
          </span>
        </div>

        <div className="flex flex-row items-center gap-2 rounded-lg border border-transparent px-5 py-3 text-muted-foreground transition-colors duration-200 ease-in-out hover:border-border hover:bg-neutral-7">
          <CableIcon className="size-6 shrink-0" />
          <span className="font-code text-sm font-semibold uppercase">
            My journey
          </span>
        </div>

        <div className="flex flex-row items-center gap-2 rounded-lg border border-transparent px-5 py-3 text-muted-foreground transition-colors duration-200 ease-in-out hover:border-border hover:bg-neutral-7">
          <MapIcon className="size-6 shrink-0" />
          <span className="font-code text-sm font-semibold uppercase">
            Explore questions
          </span>
        </div>

        <div className="flex flex-row items-center gap-2 rounded-lg border border-transparent px-5 py-3 text-muted-foreground transition-colors duration-200 ease-in-out hover:border-border hover:bg-neutral-7">
          <BookmarkCheckIcon className="size-6 shrink-0" />
          <span className="font-code text-sm font-semibold uppercase">
            My collection
          </span>
        </div>

        <div className="my-1 h-px w-full border-b" />

        <div className="flex flex-row items-center gap-2 rounded-lg border border-transparent px-5 py-3 text-muted-foreground transition-colors duration-200 ease-in-out hover:border-border hover:bg-neutral-7">
          <AudioWaveform className="size-6 shrink-0" />
          <span className="font-code text-sm font-semibold uppercase">
            Track your progress
          </span>
        </div>

        <div className="flex flex-row items-center gap-2 rounded-lg border border-transparent px-5 py-3 text-muted-foreground transition-colors duration-200 ease-in-out hover:border-border hover:bg-neutral-7">
          <CalendarClock className="size-6 shrink-0" />
          <span className="font-code text-sm font-semibold uppercase">
            Review
          </span>
        </div>

        <div className="flex flex-row items-center gap-2 rounded-lg border border-transparent px-5 py-3 text-muted-foreground transition-colors duration-200 ease-in-out hover:border-border hover:bg-neutral-7">
          <Settings className="size-6 shrink-0" />
          <span className="font-code text-sm font-semibold uppercase">
            Settings
          </span>
        </div>

        <div className="flex flex-row items-center gap-2 rounded-lg border border-transparent px-5 py-3 text-muted-foreground transition-colors duration-200 ease-in-out hover:border-border hover:bg-neutral-7">
          <MoonIcon className="size-6 shrink-0" />
          <span className="font-code text-sm font-semibold uppercase">
            Theme
          </span>
        </div>
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
