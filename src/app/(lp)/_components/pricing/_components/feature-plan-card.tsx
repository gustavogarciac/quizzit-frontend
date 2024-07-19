import { CheckIcon } from 'lucide-react'
import React from 'react'

type Props = {
  message: string
}

export const FeaturePlanCard = ({ message }: Props) => {
  return (
    <div className="flex items-start gap-4">
      <CheckIcon className="size-6 shrink-0 rounded-full bg-accents-5 text-primary" />
      <p className="leading-normal text-primary">{message}</p>
    </div>
  )
}
