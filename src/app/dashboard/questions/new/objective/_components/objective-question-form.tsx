'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import React, { useState } from 'react'
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import {
  objectiveQuestionFormSchema,
  ObjectiveQuestionFormType,
} from '@/schemas/objective-question'

import { Alternative } from './alternative'
import { ObjectiveQuestionPreview } from './objective-question-preview'

export enum AlternativeOption {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
}

export const ObjectiveQuestionForm = () => {
  const [alternativeA, setAlternativeA] = useState('')
  const [alternativeB, setAlternativeB] = useState('')
  const [alternativeC, setAlternativeC] = useState('')
  const [alternativeD, setAlternativeD] = useState('')
  const [correctAlternative, setCorrectAlternative] = useState<
    'A' | 'B' | 'C' | 'D'
  >('A')

  const form = useForm<ObjectiveQuestionFormType>({
    resolver: zodResolver(objectiveQuestionFormSchema),
    defaultValues: {
      context: '',
      image: undefined,
      statement: '',
      subject: '',
      title: '',
    },
  })

  function handleImageSelect(event: React.ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) return

    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        if (e.target) {
          form.setValue('image', e.target.result as string)
        }
      }
      reader.readAsDataURL(file)
    }
  }

  function handleSubmit(data: ObjectiveQuestionFormType) {
    const alternatives = [
      {
        alternative: 'A',
        text: alternativeA,
        isCorrect: correctAlternative === 'A',
      },
      {
        alternative: 'B',
        text: alternativeB,
        isCorrect: correctAlternative === 'B',
      },
      {
        alternative: 'C',
        text: alternativeC,
        isCorrect: correctAlternative === 'C',
      },
      {
        alternative: 'D',
        text: alternativeD,
        isCorrect: correctAlternative === 'D',
      },
    ]

    console.log({
      ...data,
      alternatives,
    })
  }

  return (
    <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-[2fr_1fr]">
      <div className="rounded-xl border bg-neutral-8 p-6 shadow-sm">
        <h1 className="font-grotesk text-2xl font-semibold leading-relaxed tracking-tight">
          Create an Objective Question
        </h1>
        <p className="text-sm text-muted-foreground">
          To create an objective question, you must provide the following
          details:
        </p>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="mt-10 flex flex-col gap-4"
          >
            <div className="grid grid-cols-[1fr_1fr] gap-4">
              <FormField
                name="title"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Give a title to your question..."
                        {...field}
                        type="text"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="statement"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Statement
                      <span className="font-semibold text-accents-1">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Statement is a required field..."
                        {...field}
                        type="text"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              name="context"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Context</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Give some context to your question, if needed..."
                      className="min-h-32 resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="subject"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Subject<span className="text-accents-1">*</span>
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Relate your question to a subject." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="nature-sciences">
                        Nature Sciences
                      </SelectItem>
                      <SelectItem value="humanities">Humanities</SelectItem>
                      <SelectItem value="hard-sciences">
                        Hard Sciences
                      </SelectItem>
                      <SelectItem value="social-sciences">
                        Social Sciences
                      </SelectItem>
                      <SelectItem value="health">Health</SelectItem>
                      <SelectItem value="agricultural">Agricultural</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="image"
              control={form.control}
              render={() => (
                <FormItem className="flex flex-row">
                  <FormLabel className="w-fit">
                    <div className="w-fit space-y-2 rounded-sm">
                      <span className="text-sm text-primary">
                        Image (optional)
                      </span>

                      <div className="flex w-fit cursor-pointer flex-row items-center gap-4 rounded-sm border border-border px-4 py-2">
                        <Image
                          src={
                            form.watch('image') ||
                            '/assets/image-placeholder.png'
                          }
                          alt=""
                          width={50}
                          height={50}
                          className="aspect-square rounded-full object-cover"
                        />
                        <span>Select image file</span>
                      </div>
                    </div>
                  </FormLabel>
                  <FormControl>
                    <input
                      placeholder="Add an image URL..."
                      type="file"
                      className="sr-only h-1 w-1"
                      accept="image/*"
                      onChange={handleImageSelect}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex flex-col gap-2">
              <span className="text-sm text-primary">Alternatives</span>

              <Alternative
                setText={setAlternativeA}
                text={alternativeA}
                correctAlternative={correctAlternative}
                alternative="A"
                set={setCorrectAlternative}
              />

              <Alternative
                setText={setAlternativeB}
                text={alternativeB}
                correctAlternative={correctAlternative}
                alternative="B"
                set={setCorrectAlternative}
              />

              <Alternative
                setText={setAlternativeC}
                text={alternativeC}
                correctAlternative={correctAlternative}
                alternative="C"
                set={setCorrectAlternative}
              />

              <Alternative
                setText={setAlternativeD}
                text={alternativeD}
                correctAlternative={correctAlternative}
                alternative="D"
                set={setCorrectAlternative}
              />
            </div>

            <div className="flex flex-row justify-end">
              <Button
                variant="theme"
                disabled={form.formState.isSubmitting}
                type="submit"
              >
                Create Objective Question
              </Button>
            </div>
          </form>
        </Form>
      </div>

      <ObjectiveQuestionPreview
        data={{
          title: form.watch('title'),
          context: form.watch('context'),
          statement: form.watch('statement'),
          subject: form.watch('subject'),
          image: form.watch('image'),
          alternatives: [
            alternativeA,
            alternativeB,
            alternativeC,
            alternativeD,
          ],
          correctAlternative,
        }}
      />
    </div>
  )
}
