import { faker } from '@faker-js/faker'
import { LockIcon, PencilIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

const SettingsPage = () => {
  return (
    <div className="flex flex-col gap-4 rounded-2xl bg-neutral-8 p-6">
      <h1 className="text-2xl font-semibold">Settings</h1>

      <div className="flex w-fit flex-row items-center gap-3 rounded-3xl bg-neutral-7 p-1">
        <button className="ease rounded-3xl bg-neutral-6 px-4 py-2 transition-colors hover:bg-neutral-6">
          Profile
        </button>
        <button className="ease rounded-3xl px-4 py-2 transition-colors hover:bg-neutral-6">
          Notifications
        </button>
        <button className="ease rounded-3xl px-4 py-2 transition-colors hover:bg-neutral-6">
          Privacity
        </button>
      </div>

      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-3 items-center border-b py-4">
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold">Your photo</h3>
            <span className="text-sm text-muted-foreground">
              This will be displayed as your profile picture
            </span>
          </div>

          <div className="col-span-2 flex flex-row items-center gap-4">
            <Image
              src={faker.image.avatarGitHub()}
              alt="Profile picture"
              width={100}
              height={100}
              className="rounded-full object-cover"
            />

            <Button variant="secondary" size="sm">
              <PencilIcon className="mr-2 size-4" />
              Change photo
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-1 border-b py-3">
          <div className="grid grid-cols-3 items-center py-4">
            <Label htmlFor="name">Your name</Label>
            <Input
              className="col-span-2 w-2/3"
              value={faker.person.fullName()}
              id="name"
            />
          </div>
          <div className="grid grid-cols-3 items-center py-4">
            <Label htmlFor="email">Your email</Label>
            <Input
              className="col-span-2 w-2/3"
              value={faker.internet.email()}
              type="email"
              id="email"
            />
          </div>
          <div className="grid grid-cols-3 items-start py-4">
            <Label htmlFor="bio">Your bio</Label>
            <Textarea
              className="col-span-2 min-h-44 w-2/3 resize-none"
              value={faker.lorem.paragraph()}
              id="bio"
            />
          </div>
          <div className="grid grid-cols-3 items-center py-4">
            <Label htmlFor="language">Language</Label>
            <Select>
              <SelectTrigger className="col-span-2 w-2/3 max-w-none">
                <SelectValue
                  placeholder="Select your language."
                  defaultValue={'english'}
                  className="w-full max-w-none"
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="english">
                  <div className="flex flex-row items-center gap-2">
                    <Image
                      src="/assets/flags/united-states.png"
                      width={20}
                      height={20}
                      className="aspect-square rounded-full object-cover"
                      alt=""
                    />
                    <span>English</span>
                  </div>
                </SelectItem>
                <SelectItem value="portuguese">
                  <div className="flex flex-row items-center gap-2">
                    <Image
                      src="/assets/flags/brazil.png"
                      width={20}
                      height={20}
                      className="aspect-square rounded-full object-cover"
                      alt=""
                    />
                    <span>Portuguese</span>
                  </div>
                </SelectItem>
                <SelectItem value="spanish">
                  <div className="flex flex-row items-center gap-2">
                    <Image
                      src="/assets/flags/mexico.jpg"
                      width={20}
                      height={20}
                      className="aspect-square rounded-full object-cover"
                      alt=""
                    />
                    <span>Spanish</span>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-3 items-start py-4">
            <span>Password</span>
            <div className="col-span-2 flex w-2/3 flex-row justify-end">
              <Button variant="secondary" size="sm" className="w-fit self-end">
                <LockIcon className="mr-2 size-4" /> Change password
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-3 items-center py-4">
            <div className="col-span-1" />
            <div className="col-span-2 flex w-2/3 flex-row justify-end gap-3">
              <Button variant="ghost" size="sm">
                Cancel
              </Button>

              <Button size="sm">Update information</Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 items-center py-4">
          <span>Danger zone</span>
          <div className="cols-span-2 flex flex-row gap-3">
            <Button variant="destructive" size="sm">
              Delete your account
            </Button>

            <Button variant="outline" size="sm">
              Desactive your account
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SettingsPage
