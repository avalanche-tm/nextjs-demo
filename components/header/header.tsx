import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import PersonImage from '@assets/images/person.png'
import Logo from '@assets/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '../icon'
import NavbarItem from './navbar-item'

function Header() {
  return (
    <header className='flex flex-row items-center justify-between py-2 mx-22'>
      <Link href='/'>
        <Logo />
      </Link>
      <nav>
        <ul className='flex flex-row items-center gap-6 text-xl '>
          <li>
            <NavbarItem icon={<Icon name='Home' size='lg' />} href='/home'>
              Home
            </NavbarItem>
          </li>
          <li>
            <NavbarItem icon={<Icon name='Soundwave' size='lg' />} href='/my-library'>
              My Library
            </NavbarItem>
          </li>
          <li>
            <NavbarItem icon={<Icon name='Head' size='lg' />} href='/community'>
              Community
            </NavbarItem>
          </li>
          <li>
            <NavbarItem icon={<Icon name='CryptoCoin' size='lg' />} href='/pricing'>
              Pricing
            </NavbarItem>
          </li>
          <li>
            <NavbarItem icon={<Icon name='Send' size='lg' />} href='/contact'>
              Contact
            </NavbarItem>
          </li>
        </ul>
      </nav>
      <div className='flex flex-row gap-2 items-center'>
        <Button
          variant='secondary'
          className='rounded-full font-bold text-xl h-[2.875rem]'
        >
          <Icon name='CryptoCoinBold' className='mr-1' />
          {32}
        </Button>
        <Avatar asChild={true}>
          <Image
            src={PersonImage}
            alt='avatar'
            width={40}
            height={40}
            className='cursor-pointer'
          />
        </Avatar>
      </div>
    </header>
  )
}

export default Header
