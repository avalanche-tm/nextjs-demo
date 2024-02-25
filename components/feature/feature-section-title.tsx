import { cn } from '@/lib/utils'
import Image, { StaticImageData } from 'next/image'

type FeatureSectionTitleProps = {
  title: string
  itemCount: number
  image: StaticImageData
  imageAlt: string
  className?: string
}

function FeatureSectionTitle({
  title,
  itemCount,
  image,
  imageAlt,
  className,
}: FeatureSectionTitleProps) {
  return (
    <h3
      className={cn(
        'flex flex-row items-center text-3xl sm:text-5xl lg:text-5.5xl text-base-400 font-black',
        className,
      )}
    >
      <Image src={image} alt={imageAlt} className='mr-4' />
      {title}
      <span className='text-base-100 ml-3'>{itemCount}</span>
    </h3>
  )
}

export default FeatureSectionTitle
