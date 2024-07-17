import Image from 'next/image'
import React from 'react'

export const Logo = () => {
  return (
    <div className="flex flex-row items-center gap-1.5">
      <Image
        src={'/assets/logo.svg'}
        alt="Brain icon with a purple background"
        width={40}
        height={40}
      />

      <h1 className="font-sans text-2xl font-bold">Quizzit</h1>
    </div>
  )
}
