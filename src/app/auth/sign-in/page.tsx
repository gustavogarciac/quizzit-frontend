import { Metadata } from 'next'
import React from 'react'

import { Logo } from '@/components/logo'

import { SignInForm } from './_components/sign-in-form'

export const metadata: Metadata = {
  title: 'Sign in',
  description: 'Sign in to access the platform.',
}

const SignInPage = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-[url('/assets/stars.svg')]">
      <div className="flex w-full flex-col items-center justify-center gap-4 lg:w-96">
        <Logo size={'sm'} />

        <div className="flex w-full flex-col items-center justify-center gap-1 lg:w-96">
          <h1 className="font-sans text-[3.5rem] font-bold">Sign in</h1>

          <p className="text-sm text-muted-foreground">
            Sign in to access the platform.
          </p>

          <SignInForm />
        </div>
      </div>
    </div>
  )
}

export default SignInPage
