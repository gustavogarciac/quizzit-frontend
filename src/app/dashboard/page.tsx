import React from 'react'

import { Sidebar } from './_components/sidebar'

const DashboardPage = () => {
  return (
    <div className="grid flex-1 grid-cols-[1fr_4fr_1fr] gap-3">
      <Sidebar />

      <div className="flex-1 bg-[url('/assets/stars.svg')]"></div>
      <aside className=""></aside>
    </div>
  )
}

export default DashboardPage
