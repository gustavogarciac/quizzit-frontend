import React from 'react'

import { Header } from './_components/header'

type Props = {
  children: React.ReactNode
}

const LandingPageLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen overflow-hidden bg-neutral-8">
      <Header />
      {children}
    </div>
  )
}

export default LandingPageLayout
