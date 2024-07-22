import React from 'react'

import { Header } from './_components/header'

type Props = {
  children: React.ReactNode
}

const DashboardLayout = ({ children }: Props) => {
  return (
    <div className="min-w-screen flex min-h-screen flex-col bg-neutral-7">
      <Header />
      {children}
    </div>
  )
}

export default DashboardLayout
