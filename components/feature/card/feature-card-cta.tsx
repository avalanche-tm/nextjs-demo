import { Feature } from '@/lib/feature/feature'
import { getImagePlaceholder } from '@/lib/utils/get-image-placeholder'
import { cn } from '@/lib/utils/tailwind-utils'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '../../icon'
import { Button } from '../../ui/button'
import FavoriteButton from '../../ui/favorite-button'

type FeatureCardCTAProps = {
  feature: Feature
  href: string
  onCTAClick?: () => void
  className: string
}

/// This component is used to display a feature card with a call to action button
async function FeatureCardCTA({
  feature,
  href,
  className,
  onCTAClick,
}: FeatureCardCTAProps) {
  const blurDataURL = await getImagePlaceholder(feature.imageUrl)

  return (
    <div
      className={cn(
        'relative flex flex-col-reverse md:flex-row rounded-3xl border border-base-400/8 overflow-hidden h-full',
        className,
      )}
    >
      <div className='flex flex-col p-6 pr-4 md:w-1/2 lg:w-1/3 mr-2'>
        <div className='flex flex-col gap-2 flex-1'>
          <div className='flex flex-row items-center text-4.5xl font-bold text-base-400 leading-none'>
            {feature.community && <Icon name='HeadBold' className='mr-1' />}
            {feature.voice}
          </div>
          <div className='text-sm font-semibold'>{`${feature.uses}K uses · ${feature.likes}K likes`}</div>
        </div>

        <Button onClick={onCTAClick} size='lg' className='font-bold w-full mt-10'>
          <Icon name='Soundwave' size='lg' className='mr-1' />
          {`Voicify ${feature.voice}`}
        </Button>
      </div>
      <div className='relative w-full overflow-hidden h-60 md:flex-1 md:h-auto'>
        <Link href={href}>
          <Image
            src={feature.imageUrl}
            alt={feature.voice}
            fill={true}
            // placeholder='blur'
            // blurDataURL={blurDataURL}
            unoptimized
            className='object-cover hover:scale-110 transition duration-500'
          />
        </Link>
      </div>
      <FavoriteButton className='absolute top-3 right-3' />
    </div>
  )
}

export default FeatureCardCTA
