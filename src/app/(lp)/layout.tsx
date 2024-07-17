import React from 'react'

import { Header } from './_components/header'

type Props = {
  children: React.ReactNode
}

const LandingPageLayout = ({ children }: Props) => {
  return (
    <div className="bg-neutral-8 min-h-screen">
      <Header />
      {children}
    </div>
  )
}

export default LandingPageLayout
