'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { ChromeIcon } from 'lucide-react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/use-toast'
import { signInSchema, signInSchemaType } from '@/schemas/sign-in'

import { signInAction } from '../actions'

export const SignInForm = () => {
  const form = useForm<signInSchemaType>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  async function handleSignIn(data: signInSchemaType) {
    try {
      const { message } = await signInAction(data)
      toast({
        title: message,
        description: 'You will be redirected to the main dashboard.',
      })
    } catch (err) {
      form.setError('email', {
        type: 'manual',
        message: 'An error occurred while signing in.',
      })

      form.setError('password', {
        type: 'manual',
        message: "We couldn't sign you in. Please try again.",
      })
      return toast({
        title: 'Error',
        description: 'An error occurred while signing in.',
      })
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSignIn)}
        className="mt-6 flex w-full flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Your email..." {...field} type="email" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="Type in your account password."
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Link
          href="/auth/recover-pass"
          className="self-end font-code text-xs uppercase text-muted-foreground underline-offset-2 transition-colors duration-300 ease-linear hover:text-primary hover:underline"
        >
          Have you forgotten your password?
        </Link>

        <Button type="submit" className="mt-2 rounded-tr-2xl">
          Continue
        </Button>

        <span className="font-code text-xs uppercase text-muted-foreground">
          Dont have an account yet?{' '}
          <Link
            href="/auth/sign-up"
            className="underline-offset-2 transition-colors duration-300 ease-linear hover:text-primary hover:underline"
          >
            Click here.
          </Link>
        </span>

        <div className="h-px w-full border" />

        <Button
          variant="secondary"
          type="button"
          className="flex-row-reverse gap-2 rounded-tr-2xl"
        >
          Continue with Github <GitHubLogoIcon className="size-4" />
        </Button>

        <Button
          variant="secondary"
          type="button"
          className="flex-row-reverse gap-2 rounded-tr-2xl"
        >
          Continue with Google <ChromeIcon className="size-4" />
        </Button>
      </form>
    </Form>
  )
}
