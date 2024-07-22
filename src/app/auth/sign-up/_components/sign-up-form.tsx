'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { ChromeIcon, Loader2 } from 'lucide-react'
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
import { signUpSchema, SignUpSchemaType } from '@/schemas/sign-up'

import { signUpAction } from '../actions'

export const SignUpForm = () => {
  const form = useForm<SignUpSchemaType>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  async function handleSignUp(data: SignUpSchemaType) {
    try {
      const { message } = await signUpAction(data)
      toast({
        title: message,
        description: 'You will be redirected to the main dashboard.',
      })
    } catch (err) {
      form.setError('email', {
        type: 'manual',
        message: 'An error occurred while signupg in.',
      })

      form.setError('password', {
        type: 'manual',
        message: "We couldn't sign you in. Please try again.",
      })
      return toast({
        title: 'Error',
        description: 'An error occurred while signupg in.',
      })
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSignUp)}
        className="mt-6 flex w-full flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your name..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Your email..." {...field} />
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

        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm your password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Type in the same password you have written up."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="mt-2 rounded-tr-2xl"
          disabled={form.formState.isLoading}
        >
          {form.formState.isLoading ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            'Continue'
          )}
        </Button>

        <span className="font-code text-xs uppercase text-muted-foreground">
          Already have an account?{' '}
          <Link
            href="/auth/sign-in"
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
