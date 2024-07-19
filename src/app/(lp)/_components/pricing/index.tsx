import Link from 'next/link'

import { Container } from '@/components/ui/container'

import { PlanCard } from './_components/plan-card'

export const PricingSection = () => {
  return (
    <Container>
      <div className="relative mt-32 flex flex-col items-center justify-center gap-4 bg-[url('/assets/stars.svg')] px-2">
        <div className="relative flex flex-col items-center justify-center">
          <span className="font-code text-sm uppercase text-muted-foreground">
            <strong className="text-accents-1">[</strong> Get started right now{' '}
            <strong className="text-accents-1">]</strong>
          </span>
          <h1 className="text-center text-[3rem] font-bold leading-relaxed text-primary">
            Simple, transparent pricing.
          </h1>

          <div className="pointer-events-none absolute left-1/2 right-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-gradient-to-tr from-accents-3 via-accents-2 to-accents-6 blur-xxl" />
        </div>

        <p className="pb-56 text-center text-base text-muted-foreground">
          No hidden fees. No surprises. Your focus will be totally on your mind.
        </p>

        <div className="flex flex-col gap-6 lg:flex-row">
          <PlanCard
            variant="free"
            subtitle="Start your journey with the basics. Upgrade anytime."
            vantages={[
              'Up to 2 generated questions per day.',
              'Access to a vast community with the best students.',
              'Smart revision technique to never forget any topic.',
            ]}
          />

          <PlanCard
            variant="premium"
            subtitle="Be the first on everything. Cutting edge features and priority."
            vantages={[
              'Up to 20 ai generated questions per day',
              'Analytics dashboard to track your progress over time',
              'Access to an AI chatbot that will help you any doubts',
              'Priority support',
            ]}
          />

          <PlanCard
            variant="enterprise"
            subtitle="For large institutions and organizations. Contact us for more information."
            vantages={[
              'Unlimited generated questions per day',
              'Customizable branding and features',
              'Dedicated account manager',
              '24/7 support',
            ]}
          />
        </div>

        <Link href="/pricing/details" className="mt-20">
          <span className="font-code text-xs font-bold uppercase underline">
            See the full details
          </span>
        </Link>
      </div>
    </Container>
  )
}
