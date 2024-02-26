import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils/tailwind-utils'
import Link from 'next/link'

function FooterLinkItem({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({ variant: 'link' }),
        'p-0 h-auto font-semibold text-inherit',
      )}
    >
      {children}
    </Link>
  )
}

export default FooterLinkItem
