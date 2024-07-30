import { LockIcon, SparklesIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

import { Button } from '@/components/ui/button'
import { Meteors } from '@/components/ui/meteors'

const NewQuestion = () => {
  return (
    <div className="grid-cols- relative mb-[110px] flex h-full w-full flex-1 flex-col gap-4 bg-[url('/assets/grid.png')] lg:mb-[30px]">
      <div className="pointer-events-none absolute bottom-1/2 left-1/2 right-1/2 top-1/2 z-10 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-accents-2 via-accents-3 to-accents-4 blur-xxl" />

      <div className="pointer-events-none absolute bottom-0 right-0 z-10 h-40 w-40 rounded-full bg-gradient-to-tr from-accents-1 via-accents-6 to-accents-5 blur-xxl" />

      <div className="z-20 space-y-2 rounded-xl bg-neutral-8 bg-opacity-90 bg-clip-padding p-8 shadow-md backdrop-blur-sm backdrop-filter">
        <h1 className="font-grotesk text-2xl font-bold">New Question</h1>
        <p className="text-sm text-muted-foreground">
          You can choose between discursive or objective questions generation.
          You can also choose between manual generation or AI generation.
        </p>
        <p className="text-sm text-muted-foreground">
          Notice that the AI generation is limited to 3 questions per day when
          using the free plan. You can check out our plans to get lots of
          features clicking here.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1fr_2fr]">
        <div className="z-20 flex flex-col gap-2 rounded-xl bg-neutral-8 bg-opacity-90 bg-clip-padding p-8 shadow-md backdrop-blur-sm backdrop-filter">
          <h1 className="font-grotesk text-2xl font-bold">
            Manual Objective Question
          </h1>
          <p className="text-sm text-muted-foreground">
            Create your own questions to test your knowledge. We do the rest.
          </p>
          <div className="mt-3 flex justify-end">
            <Button variant={'theme'}>Create manual question</Button>
          </div>
        </div>

        <div className="relative z-20 row-span-2 flex flex-col gap-2 overflow-hidden rounded-xl border border-accents-1 bg-neutral-8 bg-opacity-90 bg-clip-padding p-8 shadow-md backdrop-blur-sm backdrop-filter">
          <div className="pointer-events-none absolute inset-0 opacity-30">
            <Meteors />
          </div>
          <div className="flex flex-row items-center gap-2">
            <h1 className="font-grotesk text-2xl font-bold">AI Generative</h1>
            <SparklesIcon className="size-5 shrink-0" />
          </div>
          <p className="text-sm text-muted-foreground">
            Trust our artificial intelligence to create questions based on your
            study material. All questions will be tracked to grant you the best
            experience. Let&apos;s shape the future.
          </p>

          <Image
            src={'/assets/draws/4-small.png'}
            width={400}
            height={400}
            alt=""
            className="pointer-events-none absolute -bottom-20 -left-20 z-10 opacity-[2%]"
          />

          <div className="z-30 mt-auto flex flex-1 flex-col justify-end">
            <div className="mt-3 flex justify-end">
              <Button variant="theme">Create AI Objective question</Button>
            </div>
          </div>
        </div>

        <div className="z-20 space-y-2 rounded-xl bg-neutral-8 bg-opacity-90 bg-clip-padding p-6 shadow-md backdrop-blur-sm backdrop-filter">
          <div className="flex flex-col gap-2 rounded-xl border border-neutral-6 p-3">
            <div className="flex flex-row items-center gap-2">
              <h1 className="font-grotesk text-2xl font-bold">
                Discursive Question
              </h1>
              <LockIcon className="size-4 shrink-0" />
            </div>
            <p className="text-sm text-muted-foreground">
              To create a discursive question, you need to be a premium user.
            </p>
            <div className="mt-3 flex justify-end">
              <Button variant={'theme'}>View available plans</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewQuestion
