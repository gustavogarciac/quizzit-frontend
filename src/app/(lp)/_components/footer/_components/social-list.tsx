import React from 'react'

import { SocialItem } from './social-item'

export const SocialList = () => {
  return (
    <ul className="flex flex-row items-center gap-2 lg:flex-col">
      <SocialItem
        alt="Discord"
        href="https://discord.gg/5r6Y7Uk"
        src="/assets/socials/discord.svg"
      />

      <SocialItem
        alt="Twitter"
        href="https://x.com"
        src="/assets/socials/twitter.svg"
      />

      <SocialItem
        alt="Instagram"
        href="https://instagram.com/ofcquizzit"
        src="/assets/socials/instagram.svg"
      />

      <SocialItem
        alt="Telegram"
        href="https://telegram.com"
        src="/assets/socials/telegram.svg"
      />

      <SocialItem
        alt="Facebook"
        href="https://facebook.com/ofcquizzit"
        src="/assets/socials/facebook.svg"
      />
    </ul>
  )
}
