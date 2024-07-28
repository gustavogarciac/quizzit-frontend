import { faker } from '@faker-js/faker'
import { format } from 'date-fns'
import { Bookmark, HeartIcon, MessageCircle, SlashIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'

import { Alternative } from './alternative'

export const Post = () => {
  return (
    <div className="w-full max-w-5xl space-y-2 rounded-lg bg-neutral-8 p-4 md:p-8 xl:mx-auto">
      <div className="flex flex-row items-center gap-2">
        <Avatar>
          <AvatarImage src={faker.image.url()} alt="Vinicius Alves Borba" />
          <AvatarFallback>VB</AvatarFallback>
        </Avatar>

        <div className="flex flex-row items-center gap-2">
          <div className="flex flex-col gap-px">
            <span className="font-sans text-sm font-semibold text-primary">
              {faker.person.fullName()}
            </span>

            <span className="text-xs lowercase text-muted-foreground">
              @{`${faker.person.suffix()}${faker.person.middleName()}`}
            </span>
          </div>

          <div className="flex flex-row items-center gap-2">
            <SlashIcon className="size-4 rotate-[150deg] text-muted-foreground" />

            <span className="text-xs text-muted-foreground">
              {format(faker.date.anytime(), 'MMMM, do, yyyy.')}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start gap-3">
        <div className="flex w-full max-w-3xl flex-col gap-1">
          <div className="space-y-2">
            <p className="text-sm leading-relaxed text-primary/80">
              {faker.lorem.paragraph()}
            </p>

            <p className="text-sm leading-relaxed text-primary/80">
              {faker.lorem.paragraph()}
            </p>

            <div className="relative my-2 min-h-72 w-full max-w-xl rounded-2xl">
              <Image
                src={faker.image.urlPicsumPhotos()}
                fill
                alt="Landing Page"
                className="aspect-video rounded-2xl object-contain"
              />
            </div>

            <p className="text-sm leading-relaxed text-primary/80">
              {faker.lorem.sentences()}
            </p>

            <div className="mt-4 flex flex-col gap-3">
              <Alternative text={faker.lorem.sentences()} identificator="A" />

              <Alternative text={faker.lorem.sentences()} identificator="B" />

              <Alternative text={faker.lorem.sentences()} identificator="C" />

              <Alternative text={faker.lorem.sentences()} identificator="D" />
            </div>
          </div>

          <div className="mt-3 flex flex-row flex-wrap items-center gap-3">
            <Badge variant="secondary">Art</Badge>
            <Badge variant="secondary">Abstractions</Badge>
            <Badge variant="secondary">Movements</Badge>
            <Badge variant="secondary">Interpretation</Badge>
            <Badge variant="secondary">History of Art</Badge>
          </div>

          <div className="mt-2 flex flex-row items-center gap-8">
            <div className="itens-center flex flex-row gap-2">
              <HeartIcon className="size-6 text-primary" />
              <span className="text-sm text-primary">12</span>
            </div>

            <div className="flex flex-row items-center gap-2">
              <MessageCircle className="size-6 text-primary" />
              <span className="text-sm text-primary">5</span>
            </div>

            <div className="flex flex-row items-center gap-2">
              <Bookmark className="size-6 text-primary" />
              <span className="text-sm text-primary">8</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
