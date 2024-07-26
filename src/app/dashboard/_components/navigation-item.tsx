'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

import { cn } from '@/lib/utils'

type Props = {
  icon: React.ReactNode
  title: string
  href: string
}

export const NavigationItem = ({ icon, title, href }: Props) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={cn(
        'flex flex-row items-center gap-2 rounded-lg border border-transparent px-5 py-3 font-code text-sm font-semibold uppercase text-muted-foreground transition-colors duration-200 ease-in-out hover:border-border hover:bg-neutral-7',
        isActive && 'border-border bg-neutral-7',
      )}
    >
      {icon}
      {title}
    </Link>
  )
}
