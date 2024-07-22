import Link from 'next/link'

export const HeaderNavigation = () => {
  return (
    <nav className="flex w-full flex-row">
      <ul className="flex list-none flex-row gap-8">
        <li>
          <Link
            href="/dashboard"
            className="font-sans text-sm uppercase text-muted-foreground transition-all duration-300 ease-linear hover:text-primary hover:underline"
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            href="/my-journey"
            className="font-sans text-sm uppercase text-muted-foreground transition-all duration-300 ease-linear hover:text-primary hover:underline"
          >
            My journey
          </Link>
        </li>
        <li>
          <Link
            href="/explore-questions"
            className="font-sans text-sm uppercase text-muted-foreground transition-all duration-300 ease-linear hover:text-primary hover:underline"
          >
            Explore questions
          </Link>
        </li>
        <li>
          <Link
            href="/collection"
            className="font-sans text-sm uppercase text-muted-foreground transition-all duration-300 ease-linear hover:text-primary hover:underline"
          >
            My collection
          </Link>
        </li>
      </ul>
    </nav>
  )
}
