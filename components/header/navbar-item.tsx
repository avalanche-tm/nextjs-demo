'use client'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavbarItemProps = {
  icon?: React.JSX.Element
  href: string
  children: React.ReactNode
}

function NavbarItem({ icon, href, children }: NavbarItemProps) {
  const pathname = usePathname()
  const active = pathname.startsWith(href)

  return (
    <Link
      href={href}
      className={cn(
        'flex flex-row items-center gap-2 font-bold text-base-300 hover:text-base-200 transition',
        active ? 'text-base-400 hover:text-base-400' : '',
      )}
    >
      {icon}
      {children}
    </Link>
  )
}

export default NavbarItem
