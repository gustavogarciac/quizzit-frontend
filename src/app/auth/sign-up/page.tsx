import React from 'react'

import { Logo } from '@/components/logo'

import { SignUpForm } from './_components/sign-up-form'

const SignUpPage = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-[url('/assets/stars.svg')]">
      <div className="flex w-full flex-col items-center justify-center gap-4 lg:w-96">
        <Logo size={'sm'} />

        <div className="flex w-full flex-col items-center justify-center gap-1 lg:w-96">
          <h1 className="font-sans text-[3.5rem] font-bold">Sign Up</h1>

          <p className="text-sm text-muted-foreground">
            Sign up to be the best version of yourself.
          </p>

          <SignUpForm />
        </div>
      </div>
    </div>
  )
}

export default SignUpPage
