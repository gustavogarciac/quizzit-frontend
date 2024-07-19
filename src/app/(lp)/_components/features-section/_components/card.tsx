import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
  title: string
  message: string
  icon: React.ReactNode
  featured?: boolean
}

export const FeatureCard = ({
  title,
  message,
  icon,
  featured = false,
}: Props) => {
  const Cont = () => {
    return (
      <div className="group relative flex min-h-72 flex-col overflow-hidden rounded-2xl bg-neutral-8 p-6 transition-shadow hover:shadow-md">
        <div className="h-full flex-1">
          <h3 className="text-xl font-semibold">{title}</h3>

          <p className="mt-4 text-sm text-muted-foreground">{message}</p>
        </div>

        <Image
          className="pointer-events-none absolute opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100"
          src={'/assets/stars.svg'}
          alt="Stars"
          fill
        />

        <div className="shrink-1 mt-4 flex items-center justify-between gap-2">
          {icon}
          <Link
            href="/"
            className="group flex flex-row items-center gap-2 text-sm"
          >
            <span className="text-xs font-semibold uppercase">
              Explore more
            </span>
            <ChevronRight className="size-5" />
          </Link>
        </div>
      </div>
    )
  }

  return featured ? (
    <FeaturedCard>
      <Cont />
    </FeaturedCard>
  ) : (
    <Cont />
  )
}

const FeaturedCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="rounded-2xl bg-gradient-to-tl from-accents-1 via-accents-3 to-accents-6 p-px">
      {children}
    </div>
  )
}
