import { SignUpSchemaType } from '@/schemas/sign-up'

export async function signUpAction(data: SignUpSchemaType) {
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log(data)
    return {
      success: true,
      message: 'Success! You have signed up.',
      errors: null,
    }
  } catch (error) {
    return {
      success: false,
      message: 'An error occurred while signing up.',
      errors: {
        email: 'An error occurred while signing up.',
        password: "We couldn't sign you up. Please try again.",
      },
    }
  }
}
