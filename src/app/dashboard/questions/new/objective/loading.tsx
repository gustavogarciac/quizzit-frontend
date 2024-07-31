import React from 'react'

import { Skeleton } from '@/components/ui/skeleton'

import { ObjectiveQuestionPreviewSkeleton } from './_components/objective-question-preview'

const ObjectiveQuestionLoadingPage = () => {
  return (
    <div className="relative z-10 grid grid-cols-1 gap-8 sm:grid-cols-[2fr_1fr]">
      <div className="rounded-xl border bg-neutral-8 p-6 shadow-sm">
        <div className="flex flex-col gap-2">
          <Skeleton className="h-6 w-full" />

          <div className="flex flex-col gap-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4">
          <div className="grid grid-cols-[1fr_1fr] gap-4">
            <div className="flex flex-col gap-3">
              <Skeleton className="h-4 w-1/3" />
              <Skeleton className="h-9 w-full" />
            </div>
            <div className="flex flex-col gap-3">
              <Skeleton className="h-4 w-1/3" />
              <Skeleton className="h-9 w-full" />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <Skeleton className="h-4 w-1/3" />
            <Skeleton className="h-36 w-full" />
          </div>

          <div className="flex flex-col gap-3">
            <Skeleton className="h-4 w-1/3" />
            <Skeleton className="h-9 w-full" />
          </div>

          <div className="flex flex-col gap-3">
            <Skeleton className="h-4 w-1/3" />
            <Skeleton className="h-12 w-2/3" />
          </div>

          <Skeleton className="ml-auto h-10 w-2/3" />
        </div>
      </div>

      <ObjectiveQuestionPreviewSkeleton />
    </div>
  )
}

export default ObjectiveQuestionLoadingPage
