import React from 'react'

import { Post } from '../_components/post'
import { Filters } from './_components/filters'

const MyCollectionPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="z-20 space-y-2 rounded-xl bg-neutral-8 bg-opacity-90 bg-clip-padding p-8 shadow-md backdrop-blur-sm backdrop-filter">
        <h1 className="font-grotesk text-2xl font-bold">
          Your saved questions
        </h1>
        <p className="text-sm text-muted-foreground">
          In this section you can find all the questions you have saved for
          later.
        </p>
      </div>

      <div className="z-20 space-y-2 rounded-xl bg-neutral-8 bg-opacity-90 bg-clip-padding p-8 shadow-md backdrop-blur-sm backdrop-filter">
        <Filters />
      </div>

      <div className="z-20 grid grid-cols-1 gap-4">
        <div className="rounded-xl bg-neutral-8 bg-opacity-90 bg-clip-padding p-8 shadow-md backdrop-blur-sm backdrop-filter">
          <Post />
        </div>
        <div className="rounded-xl bg-neutral-8 bg-opacity-90 bg-clip-padding p-8 shadow-md backdrop-blur-sm backdrop-filter">
          <Post />
        </div>
        <div className="rounded-xl bg-neutral-8 bg-opacity-90 bg-clip-padding p-8 shadow-md backdrop-blur-sm backdrop-filter">
          <Post />
        </div>
        <div className="rounded-xl bg-neutral-8 bg-opacity-90 bg-clip-padding p-8 shadow-md backdrop-blur-sm backdrop-filter">
          <Post />
        </div>
        <div className="rounded-xl bg-neutral-8 bg-opacity-90 bg-clip-padding p-8 shadow-md backdrop-blur-sm backdrop-filter">
          <Post />
        </div>
        <div className="rounded-xl bg-neutral-8 bg-opacity-90 bg-clip-padding p-8 shadow-md backdrop-blur-sm backdrop-filter">
          <Post />
        </div>
        <div className="rounded-xl bg-neutral-8 bg-opacity-90 bg-clip-padding p-8 shadow-md backdrop-blur-sm backdrop-filter">
          <Post />
        </div>
      </div>
    </div>
  )
}

export default MyCollectionPage
