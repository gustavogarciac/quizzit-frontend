import { Skeleton } from '@/components/ui/skeleton'

const LoadingNewQuestionPage = () => {
  return (
    <div className="relative mb-[110px] flex h-full w-full flex-1 flex-col gap-4 bg-[url('/assets/grid.png')] lg:mb-[30px]">
      <div className="pointer-events-none absolute bottom-1/2 left-1/2 right-1/2 top-1/2 z-10 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-accents-2 via-accents-3 to-accents-4 blur-xxl" />

      <div className="pointer-events-none absolute bottom-0 right-0 z-10 h-40 w-40 rounded-full bg-gradient-to-tr from-accents-1 via-accents-6 to-accents-5 blur-xxl" />

      <div className="z-20 space-y-2 rounded-xl bg-neutral-8 bg-opacity-90 bg-clip-padding p-8 shadow-md backdrop-blur-sm backdrop-filter">
        <Skeleton className="h-8 w-36" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-1/2" />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1fr_2fr]">
        <div className="z-20 flex flex-col gap-2 rounded-xl bg-neutral-8 bg-opacity-90 bg-clip-padding p-8 shadow-md backdrop-blur-sm backdrop-filter">
          <Skeleton className="h-8 w-[70%]" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />

          <div className="mt-3 flex justify-end">
            <Skeleton className="h-8 w-1/2" />
          </div>
        </div>

        <div className="relative z-20 row-span-2 flex flex-col gap-2 overflow-hidden rounded-xl border border-accents-1 bg-neutral-8 bg-opacity-90 bg-clip-padding p-8 shadow-md backdrop-blur-sm backdrop-filter">
          <Skeleton className="h-8 w-40" />

          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-1/4" />

          <div className="z-30 mt-auto flex flex-1 flex-col justify-end">
            <div className="mt-3 flex justify-end">
              <Skeleton className="h-8 w-1/3" />
            </div>
          </div>
        </div>

        <div className="z-20 space-y-2 rounded-xl bg-neutral-8 bg-opacity-90 bg-clip-padding p-6 shadow-md backdrop-blur-sm backdrop-filter">
          <div className="flex flex-col gap-2 rounded-xl border border-neutral-6 p-3">
            <Skeleton className="h-8 w-[70%]" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />

            <div className="mt-3 flex justify-end">
              <Skeleton className="h-8 w-1/2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoadingNewQuestionPage
