import { buttonVariants } from '@/components/ui/button'
import { categories } from '@/lib/category/categories'
import { cn } from '@/lib/utils/tailwind-utils'

import Image from 'next/image'
import Link from 'next/link'

function CategoryList({ className }: { className?: string }) {
  return (
    <div className={cn('flex flex-row gap-2 overflow-auto', className)}>
      {categories.map((category) => (
        <Link
          key={category.name}
          href='#'
          className={cn(
            buttonVariants({ variant: 'secondary' }),
            'relative flex-shrink-0 rounded-full font-bold text-base p-2 pr-3 first:ml-auto last:mr-auto',
          )}
        >
          <Image
            src={category.image}
            alt={category.name}
            className='rounded-full mr-1'
            height={24}
            width={24}
          />
          <div>{category.name}</div>
        </Link>
      ))}
    </div>
  )
}

export default CategoryList
