import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Anime from '@assets/images/categories/anime.png'
import Cartoon from '@assets/images/categories/cartoon.png'
import French from '@assets/images/categories/french.png'
import Gaming from '@assets/images/categories/gaming.png'
import German from '@assets/images/categories/german.png'
import Korean from '@assets/images/categories/korean.png'
import Music from '@assets/images/categories/music.png'
import PublicFigure from '@assets/images/categories/public-figure.png'
import Image from 'next/image'
import Link from 'next/link'

const categories = [
  {
    name: 'Anime',
    image: Anime,
  },
  {
    name: 'Cartoon',
    image: Cartoon,
  },
  {
    name: 'French',
    image: French,
  },
  {
    name: 'Gaming',
    image: Gaming,
  },
  {
    name: 'German',
    image: German,
  },
  {
    name: 'Korean',
    image: Korean,
  },
  {
    name: 'Music',
    image: Music,
  },
  {
    name: 'Public Figure',
    image: PublicFigure,
  },
]

function CategoryList({ className }: { className?: string }) {
  return (
    <div className={cn('flex flex-row gap-1 justify-center', className)}>
      {categories.map((category) => (
        <Link
          key={category.name}
          href='#'
          className={cn(
            buttonVariants({ variant: 'secondary' }),
            'relative rounded-full font-bold text-base p-2 pr-3',
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
