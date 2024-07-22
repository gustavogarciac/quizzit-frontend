import { signInSchemaType } from '@/schemas/sign-in'

export async function signInAction(data: signInSchemaType) {
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log(data)
    return {
      success: true,
      message: 'Success! You have signed in.',
      errors: null,
    }
  } catch (error) {
    return {
      success: false,
      message: 'An error occurred while signing in.',
      errors: {
        email: 'An error occurred while signing in.',
        password: "We couldn't sign you in. Please try again.",
      },
    }
  }
}
