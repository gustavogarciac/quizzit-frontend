import React from 'react'

import { PostSkeleton } from './_components/post'

const LoadingDashboard = () => {
  return (
    <div className="flex flex-col gap-8">
      <PostSkeleton />
      <PostSkeleton />
      <PostSkeleton />
    </div>
  )
}

export default LoadingDashboard
