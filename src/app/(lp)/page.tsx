import {
  BarChart2,
  Book,
  BrainCircuit,
  FileHeart,
  FolderGit,
  LineChart,
  MessageSquareCode,
  PackageSearch,
  PlugIcon,
  Users,
} from 'lucide-react'

import { Container } from '@/components/ui/container'
import { Meteors } from '@/components/ui/meteors'

import { FeatureCard } from './_components/features-section/_components/card'
import { HeroSection } from './_components/hero-section'

export default function Home() {
  return (
    <main className="border-bottom px-4">
      {/* Hero Section */}
      <HeroSection />

      <Container>
        <div className="mt-20 w-full space-y-14 bg-[url('/assets/grid.png')] bg-center px-12">
          <p className="mx-auto text-center font-sans text-xs uppercase tracking-wide text-muted-foreground">
            Helping thousands to create strong knowledge
          </p>

          <div className="grid grid-cols-1 items-center justify-around gap-4 pb-5 sm:grid-cols-2 md:grid-cols-5">
            <div className="flex flex-row items-center justify-center gap-2 text-muted-foreground">
              <BrainCircuit className="size-8" />
              <span>Memorization</span>
            </div>

            <div className="flex flex-row items-center justify-center gap-2 text-muted-foreground">
              <LineChart className="size-8" />
              <span>Performance</span>
            </div>

            <div className="flex flex-row items-center justify-center gap-2 text-muted-foreground">
              <Users className="size-8" />
              <span>Amazing Community</span>
            </div>

            <div className="flex flex-row items-center justify-center gap-2 text-muted-foreground">
              <PackageSearch className="size-8" />
              <span>Questions collection</span>
            </div>

            <div className="flex flex-row items-center justify-center gap-2 text-muted-foreground">
              <FileHeart className="size-8" />
              <span>Healthy studying</span>
            </div>
          </div>
        </div>

        <div className="mt-40 w-full space-y-14 px-12">
          <div className="relative w-full overflow-hidden">
            <h2 className="border-bottom bg-top pb-10 text-center text-[3rem] font-semibold">
              Study Smarter, Not Harder
            </h2>
            <Meteors />
          </div>

          <div className="relative grid grid-cols-1 items-center justify-around gap-6 sm:grid-cols-2 md:grid-cols-3">
            <div className="from-accents-1 via-accents-6 to-accents-5 blur-xxl pointer-events-none absolute bottom-5 left-5 h-40 w-40 rounded-full bg-gradient-to-tr" />

            <div className="from-accents-4 via-accents-4 to-accents-5 blur-xxl pointer-events-none absolute right-5 top-5 h-40 w-40 rounded-full bg-gradient-to-tr" />
            <FeatureCard
              title="Study anything exceptionally"
              message="With Quizzit algorithm you will not forget any material that you have
          studied."
              icon={<Book className="bg-accents-5 size-10 rounded-xl p-2" />}
              featured
            />
            <FeatureCard
              title="Improve everyday"
              message="With Quizzit you will improve your knowledge everyday throughout lots of cutting edge tecnologies."
              icon={
                <LineChart className="bg-accents-3 size-10 rounded-xl p-2" />
              }
            />
            <FeatureCard
              title="Networking everywhere"
              message="You will have access to an excluvise community of students and teachers."
              icon={
                <PlugIcon className="bg-accents-2 size-10 rounded-xl p-2" />
              }
            />
            <FeatureCard
              title="Artificial Intelligence"
              message="You will have access to an outstanding model that will help you grow your knowledge."
              icon={
                <FolderGit className="bg-accents-4 size-10 rounded-xl p-2" />
              }
            />
            <FeatureCard
              title="Ask and Answer"
              message="
              You will have access to a lot of questions and you can also help others with your knowledge, building strong bonds"
              icon={
                <MessageSquareCode className="bg-accents-1 size-10 rounded-xl p-2" />
              }
            />
            <FeatureCard
              title="Be the best version of yourself!"
              message="
              You'll track your progress and see how much you've improved over time."
              icon={
                <BarChart2 className="bg-accents-6 size-10 rounded-xl p-2" />
              }
              featured
            />
          </div>
        </div>
      </Container>
    </main>
  )
}
