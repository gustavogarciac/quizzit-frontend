import { upperNavigationItems } from '@/consts/navigation-items'

import { MobileNavigationItem } from './mobile-navigation-item'

export const MobileNav = () => {
  const navigationItems = upperNavigationItems.filter(
    (item) => item.href !== '/dashboard/progress',
  )

  return (
    <div className="fixed inset-x-0 bottom-0 flex flex-row items-center justify-evenly rounded-t-xl border border-border bg-neutral-8 bg-[url('/assets/bg.png')] p-4 lg:hidden">
      {navigationItems.map((item, index) => (
        <MobileNavigationItem
          key={`mobile-nav-item-${index}-${item.title}`}
          href={item.href}
          icon={item.icon}
          title={item.title}
        />
      ))}
    </div>
  )
}
