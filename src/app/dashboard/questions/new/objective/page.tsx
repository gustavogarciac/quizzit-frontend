import { Metadata } from 'next'
import React from 'react'

import { ObjectiveQuestionForm } from './_components/objective-question-form'

export const metadata: Metadata = {
  title: 'New Question',
}

const ObjectiveQuestionPage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 4000))
  return (
    <div className="relative mb-[110px] lg:mb-[30px]">
      <div className="pointer-events-none absolute left-60 top-[33%] h-40 w-40 rounded-full bg-gradient-to-tr from-accents-2 via-accents-3 to-accents-6 blur-xxl" />
      <ObjectiveQuestionForm />
    </div>
  )
}

export default ObjectiveQuestionPage
