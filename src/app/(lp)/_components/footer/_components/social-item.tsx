import Image from 'next/image'
import React from 'react'

type Props = {
  href: string
  src: string
  alt: string
}

export const SocialItem = ({ href, src, alt }: Props) => {
  return (
    <li className="rounded-full bg-neutral-7 p-1.5 hover:bg-neutral-6">
      <a href={href} target="_blank">
        <Image src={src} width={20} height={20} alt={alt} />
      </a>
    </li>
  )
}
