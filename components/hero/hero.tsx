import heroImage from '@assets/images/hero/cover.png'
import instagramImage from '@assets/images/hero/instagram.png'
import tikTokImage from '@assets/images/hero/tiktok.svg?url'
import youtubeImage from '@assets/images/hero/youtube.png'
import Image from 'next/image'

function Hero() {
  return (
    <div className='relative flex justify-center mb-16'>
      <div className='relative flex items-center justify-center h-[460px] w-full'>
        <Image
          src={heroImage}
          alt='heroImg'
          fill={true}
          className='object-cover rounded-3xl'
        />
        <div className='absolute space-y-4 hero-gradient'>
          <h1 className='text-center text-base-0 text-7.5xl leading-none font-black'>
            Create song covers
            <br /> using any voice with AI
          </h1>
          <h2 className='text-center text-base-0 font-semibold text-xl'>
            The #1 platform for making high quality AI covers in seconds!
          </h2>
        </div>
      </div>
      <div className='absolute bg-base-0 rounded-full -bottom-16 h-[7.5rem] w-[18.75rem] flex items-center justify-center flex-col space-y-2'>
        <div className='flex flex-row items-center gap-4'>
          <Image src={tikTokImage} alt='tiktok' height='21' />
          <Image src={youtubeImage} alt='youtube' height='23' />
          <Image src={instagramImage} alt='instagram' height='26' />
        </div>
        <div className='font-semibold text-sm'>Voicify generated 100M+ views</div>
      </div>
    </div>
  )
}

export default Hero
