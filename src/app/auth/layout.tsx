import React from 'react'

import { Banner } from './_components/banner'

type Props = {
  children: React.ReactNode
}

const AuthLayout = ({ children }: Props) => {
  return (
    <div className="min-w-screen relative flex min-h-screen flex-row-reverse justify-between bg-neutral-7 lg:overflow-hidden">
      <div className="flex-1 px-4 sm:px-12 lg:basis-[30%]">{children}</div>
      <Banner />

      <div className="pointer-events-none absolute bottom-1/2 left-1/2 right-1/2 top-1/2 z-10 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-accents-1 via-accents-6 to-accents-5 blur-xxl" />
    </div>
  )
}

export default AuthLayout
