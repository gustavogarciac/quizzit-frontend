import { format } from 'date-fns'
import { SlashIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'

type Props = {
  data: {
    statement: string
    subject: string
    title?: string | undefined
    image?: string | undefined
    context?: string | undefined
  }
}

export const ObjectiveQuestionPreview = ({ data }: Props) => {
  const { title, context, statement, subject, image } = data

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
