import React from 'react'

import { cn } from '@/lib/utils'

type Props = {
  children: React.ReactNode
  otherClasses?: string
}

const Container = ({ children, otherClasses }: Props) => {
  return (
    <section
      className={cn('mx-auto max-w-[100rem] border pb-16', otherClasses)}
    >
      {children}
    </section>
  )
}

export { Container }
