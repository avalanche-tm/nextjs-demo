'use client'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils/tailwind-utils'
import PersonImage from '@assets/images/person.png'
import Logo from '@assets/logo.svg'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Icon } from '../icon'
import NavbarItem from './navbar-item'

// this component could have been broken into multiple smaller components
function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    window.addEventListener('resize', () => {
      setIsOpen(false)
    })
    return () => {
      window.removeEventListener('resize', () => {
        setIsOpen(false)
      })
    }
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 z-30 bg-base-0 w-full -mx-2 px-2 lg:px-0 lg:static lg:w-auto flex flex-row items-center justify-between shadow-lg lg:shadow-none py-2 lg:mx-3 xl:mx-22',
      )}
    >
      {/* Mobile menu toggle button */}
      <button className='lg:hidden' onClick={toggleMenu}>
        {isOpen ? (
          <X
            size={40}
            strokeWidth={2}
            strokeLinecap='square'
            className='text-base-400 hover:text-accent transition'
          />
        ) : (
          <Menu
            size={40}
            strokeWidth={2}
            strokeLinecap='square'
            className='text-base-400 hover:text-accent transition'
          />
        )}
      </button>
      {/* Logo */}
      <Link href='/'>
        <Logo />
      </Link>
      {/* Navbar */}
      <nav
        onClick={isOpen ? toggleMenu : undefined}
        className={cn(
          'bg-base-0 z-20 lg:static lg:flex',
          isOpen
            ? 'fixed top-[3.875rem] w-full h-full shadow-lg flex border-t border-base-400/10 -mx-2'
            : 'hidden',
        )}
      >
        <ul className='flex flex-col lg:flex-row lg:items-center gap-6 text-xl lg:p-0 p-4'>
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
      {/* Avatar and credits*/}
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
            placeholder='blur'
            className='cursor-pointer'
          />
        </Avatar>
      </div>
    </header>
  )
}

export default Header
