import React from 'react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

import { FeaturePlanCard } from './feature-plan-card'

type Props = {
  variant?: 'free' | 'premium' | 'enterprise'
  vantages: string[]
  subtitle: string
}

export const PlanCard = ({ variant = 'free', vantages, subtitle }: Props) => {
  const Cont = () => {
    return (
      <div className="relative max-w-md space-y-6 overflow-hidden rounded-2xl border bg-neutral-7 bg-[url('/assets/bg.png')] bg-center p-5">
        <div className="flex flex-col gap-2">
          <h2
            className={cn(
              'text-center font-grotesk text-[2.5rem] font-bold leading-tight tracking-wide text-accents-2',
              variant === 'premium' && 'text-accents-6',
              variant === 'free' && 'text-accents-2',
              variant === 'enterprise' && 'text-accents-3',
            )}
          >
            {
              {
                free: 'Free',
                premium: 'Premium',
                enterprise: 'Enterprise',
              }[variant]
            }
          </h2>
          <p className="text-center text-xs text-muted-foreground">
            {subtitle}
          </p>
        </div>

        <div className="flex items-center justify-center gap-2">
          {variant === 'enterprise' ? null : (
            <span className="text-3xl font-bold">$</span>
          )}
          <span className="text-[4rem] font-bold text-primary">
            {
              {
                free: '0',
                premium: '9.90',
                enterprise: null,
              }[variant]
            }
          </span>
          <span className="text-sm text-muted-foreground">
            {variant === 'premium' ? '/ month' : null}
          </span>
        </div>

        {variant === 'enterprise' ? (
          <Button
            className="w-full rounded-tr-2xl font-code text-sm font-semibold uppercase"
            variant={'theme'}
          >
            Contact us for more information
          </Button>
        ) : (
          <Button className="w-full rounded-tr-2xl font-code text-sm font-semibold uppercase">
            Get started
          </Button>
        )}

        {vantages.map((vantage) => (
          <>
            <div className="h-px w-full border" />

            <FeaturePlanCard message={vantage} />
          </>
        ))}

        {
          {
            free: (
              <div className="pointer-events-none absolute left-60 top-[33%] h-40 w-40 rounded-full bg-gradient-to-tr from-accents-4 via-accents-4 to-accents-5 blur-xxl" />
            ),
            premium: (
              <div className="pointer-events-none absolute left-1/2 right-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-gradient-to-tr from-accents-1 via-accents-6 to-accents-5 blur-xxl" />
            ),
            enterprise: (
              <div className="pointer-events-none absolute left-1/2 right-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-gradient-to-tr from-accents-3 via-accents-2 to-accents-6 blur-xxl" />
            ),
          }[variant]
        }
      </div>
    )
  }

  if (variant === 'premium') {
    return (
      <div className="relative overflow-hidden rounded-2xl border bg-gradient-to-tr from-accents-3 via-accents-6 to-accents-1 p-px lg:-translate-y-36">
        <Cont />
      </div>
    )
  }

  return Cont()
}
