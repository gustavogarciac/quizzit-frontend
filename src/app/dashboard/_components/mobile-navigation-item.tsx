'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type Props = {
  href: string
  icon: React.ReactNode
  title: string
}

export const MobileNavigationItem = ({ href, icon, title }: Props) => {
  const pathname = usePathname()

  const isActive = pathname === href

  return (
    <Button
      asChild
      variant="ghost"
      className="flex items-center gap-1"
      title={title}
    >
      <Link href={href} className={cn(isActive && 'rounded-xl bg-neutral-6')}>
        {icon}
        {isActive && (
          <span className="font-code text-xs font-semibold uppercase">
            {title}
          </span>
        )}
        <span className="sr-only">{title}</span>
      </Link>
    </Button>
  )
}
