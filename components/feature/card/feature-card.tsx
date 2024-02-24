import { Feature } from '@/lib/feature/feature'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '../../icon'
import FavoriteButton from '../../ui/favorite-button'

type FeatureCardProps = {
  feature: Feature
  href: string
  className?: string
  borderless?: boolean
}

function FeatureCard({ feature, href, className, borderless }: FeatureCardProps) {
  return (
    <div
      className={cn(
        'relative rounded-3xl border border-base-400/8 overflow-hidden',
        borderless && 'border-none',
        className,
      )}
    >
      <Link href={href}>
        <div
          className={cn(
            'relative w-full overflow-hidden h-60',
            borderless && 'rounded-b-3xl',
          )}
        >
          <Image
            src={feature.imageUrl}
            alt={feature.voice}
            fill={true}
            className='object-cover hover:scale-110 transition duration-500'
          />
        </div>
        <div className='p-4 pb-5 space-y-1'>
          <div className='flex flex-row items-center text-xl font-bold text-base-400'>
            {feature.community && <Icon name='HeadBold' className='mr-1' />}
            {feature.voice}
          </div>
          <div className='text-sm font-semibold'>{`${feature.uses}K uses · ${feature.likes}K likes`}</div>
        </div>
      </Link>
      <FavoriteButton className='absolute top-3 right-3' />
    </div>
  )
}

export default FeatureCard