'use client'

import { FilterIcon } from 'lucide-react'
import React from 'react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const subjects = [
  {
    name: 'Hard Sciences',
    slug: 'hard-sciences',
  },
  {
    name: 'Humanities',
    slug: 'humanities',
  },
  {
    name: 'Health',
    slug: 'health',
  },
  {
    name: 'Agriculture',
    slug: 'agriculture',
  },
]

export const Filters = () => {
  const [selectedSubjects, setSelectedSubjects] = React.useState<string[]>([
    'all',
  ])

  function handleAddSubject(subject: string) {
    if (subject === 'all' && !selectedSubjects.includes('all')) {
      setSelectedSubjects(['all'])
    }

    if (subject !== 'all' && selectedSubjects.includes('all')) {
      setSelectedSubjects((prev) => prev.filter((s) => s !== 'all'))
    }

    const subjectAlreadySelected = selectedSubjects.includes(subject)

    if (subjectAlreadySelected) {
      setSelectedSubjects((prev) => prev.filter((s) => s !== subject))
    } else {
      setSelectedSubjects((prev) => [...prev, subject])
    }
  }

  return (
    <div className="flex flex-col items-center gap-4 lg:flex-row">
      <div className="flex flex-row flex-wrap gap-2">
        <button
          className={cn(
            'rounded-md border border-transparent bg-transparent px-2 py-1 text-sm',
            selectedSubjects.includes('all') && 'bg-secondary',
          )}
          onClick={() => handleAddSubject('all')}
        >
          All
        </button>
        {subjects.map((subject) => (
          <button
            key={subject.slug}
            className={cn(
              'rounded-md border border-transparent bg-transparent px-2 py-1 text-sm',
              selectedSubjects.includes(subject.slug) && 'bg-secondary',
            )}
            onClick={() => handleAddSubject(subject.slug)}
          >
            {subject.name}
          </button>
        ))}
      </div>

      <Button
        size="sm"
        variant="outline"
        className="w-full bg-neutral-7 lg:ml-auto lg:w-fit"
      >
        <FilterIcon className="mr-2 size-4" />
        <span>Apply filters</span>
      </Button>
    </div>
  )
}
