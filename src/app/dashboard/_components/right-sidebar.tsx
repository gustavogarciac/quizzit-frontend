import {
  ArrowUpRight,
  CrownIcon,
  FileSliders,
  Receipt,
  User,
  Users,
} from 'lucide-react'
import React from 'react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'

export const RightSidebar = () => {
  return (
    <aside className="flex h-full flex-col border-l bg-neutral-8">
      <div className="relative flex flex-col items-center justify-center gap-4 overflow-hidden border-b p-5">
        <Avatar className="h-20 w-20 outline outline-offset-1 outline-accents-1">
          <AvatarImage
            src="https://github.com/gustavogarciac.png"
            alt="Gustavo Garcia"
          />
          <AvatarFallback>G</AvatarFallback>
        </Avatar>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col gap-px">
            <span className="font-grotesk text-sm font-semibold leading-tight tracking-tight">
              Gustavo Garcia
            </span>
            <span className="text-xs text-muted-foreground">
              gustavo@email.com
            </span>
          </div>
        </div>

        <div className="flex flex-row items-center gap-2">
          <Badge variant={'secondary'}>Expert</Badge>
          <ArrowUpRight className="size-4 shrink-0 text-muted-foreground" />
        </div>

        <div className="pointer-events-none absolute h-14 w-14 bg-gradient-to-tr from-accents-1 via-accents-5 to-accents-6 blur-3xl" />
      </div>

      <div className="flex flex-col gap-2 border-b p-3">
        <div className="flex flex-row items-center gap-2 rounded-lg border border-transparent px-2 py-1 text-muted-foreground transition-colors duration-200 ease-in-out hover:border-border hover:bg-neutral-7">
          <User className="size-4" />
          <span className="font-code text-xs font-semibold uppercase">
            Profile details
          </span>
        </div>
        <div className="flex flex-row items-center gap-2 rounded-lg border border-transparent px-2 py-1 text-muted-foreground transition-colors duration-200 ease-in-out hover:border-border hover:bg-neutral-7">
          <FileSliders className="size-4" />
          <span className="font-code text-xs font-semibold uppercase">
            Your preferences
          </span>
        </div>
        <div className="flex flex-row items-center gap-2 rounded-lg border border-transparent px-2 py-1 text-muted-foreground transition-colors duration-200 ease-in-out hover:border-border hover:bg-neutral-7">
          <Receipt className="size-4" />
          <span className="font-code text-xs font-semibold uppercase">
            Manage your plan
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-2 border-b p-3">
        <h2 className="text-center text-base font-semibold leading-tight tracking-tight text-primary">
          Your networking
        </h2>

        <div className="flex flex-col gap-2">
          <div className="flex flex-row items-center gap-2 rounded-lg border bg-neutral-7 p-2">
            <div className="flex flex-1 flex-row items-center gap-1">
              <Users className="size-4 shrink-0" />
              <span className="text-xs text-primary">Popularity</span>
            </div>

            <div className="flex flex-col items-center justify-center gap-px">
              <span className="text-sm font-semibold text-primary">8.5k</span>
              <small className="text-xs text-accents-4">+56%</small>
            </div>
          </div>

          <div className="flex flex-row items-center gap-2 rounded-lg border bg-neutral-7 p-2">
            <div className="flex flex-1 flex-row items-center gap-1">
              <CrownIcon className="size-4 shrink-0" />
              <span className="text-xs text-primary">Best Answer</span>
            </div>

            <div className="flex flex-col items-center justify-center gap-px">
              <span className="text-sm font-semibold text-primary">53</span>
              <small className="text-xs text-accents-3">-13%</small>
            </div>
          </div>

          <div className="flex flex-row items-center gap-2 rounded-lg border bg-neutral-7 p-2">
            <div className="flex flex-1 flex-row items-center gap-1">
              <CrownIcon className="size-4 shrink-0" />
              <span className="text-xs text-primary">
                Community Interactions
              </span>
            </div>

            <div className="flex flex-col items-center justify-center gap-px">
              <span className="text-sm font-semibold text-primary">9.53k</span>
              <small className="text-xs text-accents-4">+73%</small>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 border-b p-3">
        <h2 className="text-center text-base font-semibold leading-tight tracking-tight text-primary">
          Get better today!
        </h2>

        <div className="flex flex-col gap-2">
          <div className="flex flex-col items-start gap-1">
            <span className="font-code text-xs font-semibold uppercase text-primary">
              Solved questions
            </span>
            <div className="flex w-full flex-row items-center gap-2">
              <Progress value={30} className="w-full flex-1" />
              <span className="min-w-5 text-xs text-muted-foreground">3/5</span>
            </div>
          </div>

          <div className="flex flex-col items-start gap-1">
            <span className="font-code text-xs font-semibold uppercase text-primary">
              Reviewed questions
            </span>
            <div className="flex w-full flex-row items-center gap-2">
              <Progress value={60} className="w-full flex-1" />
              <span className="min-w-5 text-xs text-muted-foreground">
                6/10
              </span>
            </div>
          </div>

          <div className="flex flex-col items-start gap-1">
            <span className="font-code text-xs font-semibold uppercase text-primary">
              Helped community
            </span>
            <div className="flex w-full flex-row items-center gap-2">
              <Progress value={80} className="w-full flex-1" />
              <span className="min-w-5 text-xs text-muted-foreground">
                8/10
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-auto w-full p-3">
        <Button variant="secondary" className="w-full">
          Do you need assistance?
        </Button>
      </div>
    </aside>
  )
}
