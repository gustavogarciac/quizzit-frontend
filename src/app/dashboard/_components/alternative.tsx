'use client'

import { XIcon } from 'lucide-react'
import React, { useState } from 'react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type Props = {
  text: string
  identificator: string
}

const Alternative = ({ text, identificator }: Props) => {
  const [removed, setRemoved] = useState(false)
  const [focus, setFocused] = useState(false)

  function handleFocusAlternative() {
    setFocused((prev) => !prev)
  }

  return (
    <div
      className={cn(
        'flex flex-row items-start rounded-lg border border-transparent bg-neutral-6 hover:bg-neutral-5',
        focus && 'border-primary',
      )}
    >
      <button
        className={cn(
          'flex flex-1 flex-row items-start justify-start gap-2 rounded-lg bg-transparent p-2 shadow-none hover:bg-neutral-5',
          focus && 'hover:bg-neutral-6',
        )}
        onClick={handleFocusAlternative}
        disabled={removed}
      >
        <span
          className={
            'flex h-6 w-6 items-center justify-center rounded-full bg-neutral-5 px-2 py-1'
          }
        >
          {identificator}
        </span>
        <p
          className={cn(
            'flex-1 text-start font-code text-sm text-primary transition-all duration-300 ease-linear',
            removed && 'text-primary/40 line-through',
          )}
        >
          {text}
        </p>
      </button>

      <Button
        variant="ghost"
        onClick={() => setRemoved((prev) => !prev)}
        className="p-2 hover:bg-neutral-6"
        disabled={focus}
        size="icon"
      >
        <XIcon className="size-4" />
      </Button>
    </div>
  )
}

export { Alternative }
