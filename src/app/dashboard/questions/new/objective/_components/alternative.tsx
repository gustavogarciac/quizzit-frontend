import { CheckIcon } from 'lucide-react'

import { Input } from '@/components/ui/input'

type Props = {
  alternative: 'A' | 'B' | 'C' | 'D'
  text: string
  setText: (value: string) => void
  correctAlternative: 'A' | 'B' | 'C' | 'D'
  set: (value: 'A' | 'B' | 'C' | 'D') => void
}

const Alternative = ({
  alternative,
  correctAlternative,
  text,
  setText,
  set,
}: Props) => {
  const isCorrect = correctAlternative === alternative

  return (
    <div className="flex flex-row items-center">
      <span className="h-9 rounded-sm rounded-r-none border bg-neutral-7 px-2 py-1.5 font-code">
        {alternative}
      </span>
      <Input
        placeholder="What's the alternative?"
        className="w-1/2 rounded-none"
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
      />
      <button
        className="h-9 w-9 rounded-r-sm border bg-neutral-7 px-2 py-1.5"
        onClick={() => set(alternative)}
        type="button"
      >
        {isCorrect ? <CheckIcon className="size-4" /> : null}
      </button>
    </div>
  )
}

export { Alternative }
