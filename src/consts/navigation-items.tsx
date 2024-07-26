import {
  AudioWaveform,
  BarChart2,
  BookmarkCheckIcon,
  CableIcon,
  CalendarClock,
  MapIcon,
  MoonIcon,
  Settings,
} from 'lucide-react'

export const upperNavigationItems = [
  {
    icon: <BarChart2 className="size-6 shrink-0" />,
    title: 'Dashboard',
    href: '/dashboard',
  },
  {
    icon: <CableIcon className="size-6 shrink-0" />,
    title: 'My journey',
    href: '/dashboard/my-journey',
  },
  {
    icon: <MapIcon className="size-6 shrink-0" />,
    title: 'Explore questions',
    href: '/dashboard/questions',
  },
  {
    icon: <BookmarkCheckIcon className="size-6 shrink-0" />,
    title: 'My collection',
    href: '/dashboard/collection',
  },
  {
    icon: <AudioWaveform className="size-6 shrink-0" />,
    title: 'Track your progress',
    href: '/dashboard/progress',
  },
]

export const lowerNavigationItems = [
  {
    icon: <CalendarClock className="size-6 shrink-0" />,
    title: 'Review',
    href: '/dashboard/review',
  },
  {
    icon: <Settings className="size-6 shrink-0" />,
    title: 'Settings',
    href: '/dashboard/settings',
  },
  {
    icon: <MoonIcon className="size-6 shrink-0" />,
    title: 'Theme',
    href: '/dashboard/theme',
  },
]
