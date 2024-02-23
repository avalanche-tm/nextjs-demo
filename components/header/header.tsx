import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import PersonImage from '@assets/images/person.png'
import Logo from '@assets/logo.svg'
import Image from 'next/image'
import { Icon } from '../icon'
import NavbarItem from './navbar-item'

function Header() {
  return (
    <header className='flex flex-row items-center justify-between py-2'>
      <Logo />
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
        <Button variant='secondary' className='rounded-full font-bold text-xl h-11'>
          <Icon name='CryptoCoinThick' className='mr-1' />
          <span>32</span>
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
