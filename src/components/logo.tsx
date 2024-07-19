import { cva, VariantProps } from 'class-variance-authority'
import Image from 'next/image'
import React from 'react'

const logoVariants = cva('font-sans leading-none', {
  variants: {
    size: {
      sm: 'text-base font-semibold',
      md: 'text-2xl font-bold',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

type Props = VariantProps<typeof logoVariants> & {
  showAt?: boolean
}

export const Logo = ({ showAt = false, size }: Props) => {
  return (
    <div className="flex flex-row items-center gap-1.5">
      <Image
        src={'/assets/logo.svg'}
        alt="Brain icon with a purple background"
        width={size === 'md' ? 40 : 24}
        height={size === 'md' ? 40 : 24}
      />

      <div className="flex flex-col justify-start gap-px">
        <h1 className={logoVariants({ size })}>Quizzit</h1>
        {showAt && (
          <span className="font-code text-xs text-muted-foreground">
            @ofcquizzit
          </span>
        )}
      </div>
    </div>
  )
}
