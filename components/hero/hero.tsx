import { cn } from '@/lib/utils/tailwind-utils'
import heroImage from '@assets/images/hero/cover.png'
import instagramImage from '@assets/images/hero/instagram.png'
import TikTokLogo from '@assets/images/hero/tiktok.svg'
import youtubeImage from '@assets/images/hero/youtube.png'
import Image from 'next/image'
import Link from 'next/link'

function Hero({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'relative flex justify-center mb-4 md:mb-16 mt-20 lg:mt-0',
        className,
      )}
    >
      <div className='relative flex items-center justify-center h-80 md:h-[28.75rem] w-full'>
        <Image
          src={heroImage}
          alt='heroImg'
          fill={true}
          placeholder='blur'
          priority
          className='object-cover rounded-3xl'
        />
        <div className='absolute space-y-4 hero-gradient'>
          <h1 className='text-center text-base-0 text-5xl md:text-6xl lg:text-7.5xl leading-none font-black'>
            Create song covers
            <br /> using any voice with AI
          </h1>
          <h2 className='hidden md:block text-center text-base-0 font-semibold text-base md:text-xl mx-2'>
            The #1 platform for making high quality AI covers in seconds!
          </h2>
        </div>
      </div>
      <div className='hidden absolute bg-base-0 rounded-full -bottom-16 h-[7.5rem] w-[18.75rem] md:flex items-center justify-center flex-col space-y-2'>
        <div className='flex flex-row items-center gap-4'>
          <Link href='#'>
            <TikTokLogo />
          </Link>
          <Link href='#'>
            <Image src={youtubeImage} alt='youtube' height='23' />
          </Link>
          <Link href='#'>
            <Image src={instagramImage} alt='instagram' height='26' />
          </Link>
        </div>
        <div className='font-semibold text-sm'>Voicify generated 100M+ views</div>
      </div>
    </div>
  )
}

export default Hero
