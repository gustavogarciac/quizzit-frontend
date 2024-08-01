import { format } from 'date-fns'
import { SlashIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'

type Props = {
  data: {
    statement: string
    subject: string
    title?: string | undefined
    image?: string | undefined
    context?: string | undefined
    alternatives: string[]
    correctAlternative: 'A' | 'B' | 'C' | 'D'
  }
}

export const ObjectiveQuestionPreview = ({ data }: Props) => {
  const {
    title,
    context,
    statement,
    subject,
    image,
    alternatives,
    correctAlternative,
  } = data

  return (
    <div className="h-fit rounded-xl border bg-neutral-8 p-6 shadow-sm">
      <h2 className="text-lg font-semibold leading-relaxed tracking-tight">
        Question Preview
      </h2>
      <p className="text-sm text-muted-foreground">
        Check out how your question will look like!
      </p>
      <div className="mt-2 flex flex-col gap-2 rounded-xl bg-neutral-7 px-4 py-2">
        <div className="mt-2 flex flex-row items-center gap-2">
          <Avatar>
            <AvatarImage
              src="https://github.com/gustavogarciac.png"
              alt="Gustavo Garcia"
            />
            <AvatarFallback>G</AvatarFallback>
          </Avatar>

          <div className="flex flex-col gap-px">
            <span className="font-sans text-sm font-semibold text-primary">
              Gustavo Garcia
            </span>

            <span className="text-xs lowercase text-muted-foreground">
              @gustavogarciac
            </span>
          </div>

          <div className="flex flex-row items-center gap-2">
            <SlashIcon className="size-4 rotate-[150deg] text-muted-foreground" />

            <span className="text-xs text-muted-foreground">
              {format(new Date(), 'MMMM, do, yyyy.')}
            </span>
          </div>
        </div>

        <div className="h-px w-full border border-border" />

        <div className="flex flex-col gap-2">
          {title ? (
            <h3 className="text-center text-xs font-semibold leading-relaxed tracking-tight">
              {title}
            </h3>
          ) : (
            <div className="mx-auto my-1 h-3 w-1/4 rounded-lg bg-neutral-5" />
          )}

          {statement ? (
            <p className="text-xs text-muted-foreground">{statement}</p>
          ) : (
            <div className="flex flex-col gap-1">
              <div className="h-2 w-full rounded-lg bg-neutral-5" />
              <div className="h-2 w-full rounded-lg bg-neutral-5" />
              <div className="h-2 w-1/3 rounded-lg bg-neutral-5" />
            </div>
          )}

          {image ? (
            <Image
              src={image}
              alt="Question Image"
              width={150}
              height={150}
              className="mx-auto rounded-lg"
            />
          ) : (
            <div className="mx-auto h-20 w-[55%] rounded-lg bg-neutral-5" />
          )}

          {context ? (
            <p className="text-xs text-muted-foreground">{context}</p>
          ) : (
            <div className="flex flex-col gap-1">
              <div className="h-2 w-full rounded-lg bg-neutral-5" />
              <div className="h-2 w-full rounded-lg bg-neutral-5" />
              <div className="h-2 w-1/3 rounded-lg bg-neutral-5" />
            </div>
          )}

          {alternatives.map((alternative, index) => {
            const alternativeIdentificator = String.fromCharCode(65 + index)
            const isCorrect = alternativeIdentificator === correctAlternative
            return (
              <div key={`alternative_skeleton_${index}`}>
                <div
                  className={cn(
                    'flex w-2/3 flex-row items-center',
                    isCorrect && 'rounded-sm border border-accents-4/60',
                  )}
                >
                  <span className="h-4 rounded-sm rounded-r-none border bg-neutral-7 px-1.5 font-code text-[10px]">
                    {String.fromCharCode(65 + index)}
                  </span>
                  {alternative !== '' ? (
                    <Input
                      value={alternative}
                      disabled
                      className="h-4 rounded-l-none px-1 text-xs"
                    />
                  ) : (
                    <div className="h-4 w-full rounded-r-sm bg-neutral-5" />
                  )}
                </div>
              </div>
            )
          })}

          {subject ? (
            <Badge
              variant={'secondary'}
              className="w-fit px-1 py-0.5 text-[10px]"
            >
              {subject}
            </Badge>
          ) : (
            <div className="h-3 w-1/6 rounded-lg bg-neutral-5" />
          )}
        </div>
      </div>
    </div>
  )
}

export const ObjectiveQuestionPreviewSkeleton = () => {
  return (
    <div className="h-fit min-w-[305px] rounded-xl border bg-neutral-8 p-6 shadow-sm">
      <div className="flex flex-col gap-2">
        <Skeleton className="h-6 w-1/3" />

        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-1/2" />
      </div>

      <Skeleton className="mt-3 min-h-72 w-full" />
    </div>
  )
}
