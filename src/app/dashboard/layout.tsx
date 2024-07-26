import React from 'react'

import { Header } from './_components/header'
import { MobileNav } from './_components/mobile-nav'
import { RightSidebar } from './_components/right-sidebar'
import { Sidebar } from './_components/sidebar'

type Props = {
  children: React.ReactNode
}

const DashboardLayout = ({ children }: Props) => {
  return (
    <div className="min-w-screen flex min-h-screen flex-col bg-neutral-7">
      <Header />

      <div className="relative flex min-h-screen flex-col gap-3">
        <Sidebar />

        <div className="flex-1 bg-[url('/assets/stars.svg')] bg-center px-3 pt-[110px] sm:px-[30px] lg:pl-[300px] lg:pt-[130px] xl:pr-[300px]">
          {children}
        </div>

        <RightSidebar />
        <MobileNav />
      </div>
    </div>
  )
}

export default DashboardLayout
