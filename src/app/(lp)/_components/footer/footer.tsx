import Link from 'next/link'

import { Logo } from '@/components/logo'
import { Container } from '@/components/ui/container'

import { AppCard } from './_components/app-card'
import { SocialList } from './_components/social-list'

export const Footer = () => {
  return (
    <Container otherClasses="pb-0">
      <div className="grid grid-cols-1 border-b p-3.5 sm:p-8 lg:grid-cols-3">
        <div className="col-span-2 grid h-full grid-cols-1 flex-row items-center justify-center gap-6 lg:flex lg:justify-start">
          <div className="flex flex-col items-start gap-5">
            <span className="text-base font-semibold uppercase text-primary">
              Platform
            </span>
            <ul className="flex flex-col space-y-3">
              <a
                href={'#pricing'}
                className="font-code text-sm uppercase text-muted-foreground hover:text-primary"
              >
                Plans & Pricing
              </a>
              <Link
                href="/cookies"
                className="font-code text-sm uppercase text-muted-foreground hover:text-primary"
              >
                Data Processing
              </Link>
              <Link
                href="/community"
                className="font-code text-sm uppercase text-muted-foreground hover:text-primary"
              >
                Community
              </Link>
            </ul>
          </div>

          <div className="hidden h-full w-px border sm:block" />

          <div className="flex flex-col items-start gap-5">
            <span className="text-base font-semibold uppercase text-primary">
              Company
            </span>
            <ul className="flex flex-col space-y-3">
              <Link
                href={'/about-us'}
                className="font-code text-sm uppercase text-muted-foreground hover:text-primary"
              >
                About Us
              </Link>
              <Link
                href="/work-with-us"
                className="font-code text-sm uppercase text-muted-foreground hover:text-primary"
              >
                Be part of the team
              </Link>
              <Link
                href="/the-future"
                className="font-code text-sm uppercase text-muted-foreground hover:text-primary"
              >
                How we shape the future
              </Link>
            </ul>
          </div>

          <div className="hidden h-full w-px border sm:block" />

          <div className="flex flex-col items-start gap-5">
            <span className="text-base font-semibold uppercase text-primary">
              Resources
            </span>
            <ul className="flex flex-col space-y-3">
              <Link
                href={'/docs'}
                className="font-code text-sm uppercase text-muted-foreground hover:text-primary"
              >
                Documentation
              </Link>
              <Link
                href="/faq"
                className="font-code text-sm uppercase text-muted-foreground hover:text-primary"
              >
                Help Center
              </Link>
              <Link
                href="/security-compliance"
                className="font-code text-sm uppercase text-muted-foreground hover:text-primary"
              >
                Security & Compliance
              </Link>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex w-full flex-col-reverse items-center justify-center gap-6 lg:mt-0 lg:flex-row">
          <div className="flex shrink-0 flex-col items-center justify-center gap-4">
            <SocialList />
          </div>
          <AppCard />
        </div>
      </div>

      <div className="grid grid-cols-1 items-center justify-center p-3.5 sm:p-8 md:grid-cols-3 md:justify-between">
        <div className="mx-auto md:mx-0">
          <Logo size="sm" />
        </div>

        <span className="mx-auto mt-4 block font-code text-xs uppercase text-muted-foreground md:mx-0 md:mt-0">
          {new Date().getFullYear()} &copy; Quizzit. All rights reserved.
        </span>

        <div className="mt-4 flex flex-row items-center justify-center gap-4 md:mt-0">
          <Link
            href="/privacy-policy"
            className="font-code text-xs uppercase tracking-wide text-muted-foreground transition-colors duration-300 ease-linear hover:text-primary"
          >
            Privacy Policy
          </Link>

          <div className="h-4 w-px border" />

          <Link
            href="/terms-of-service"
            className="font-code text-xs uppercase tracking-wide text-muted-foreground transition-colors duration-300 ease-linear hover:text-primary"
          >
            Terms of Service
          </Link>

          <div className="h-4 w-px border" />

          <Link
            href="/cookies"
            className="font-code text-xs uppercase tracking-wide text-muted-foreground transition-colors duration-300 ease-linear hover:text-primary"
          >
            Cookies
          </Link>
        </div>
      </div>
    </Container>
  )
}
