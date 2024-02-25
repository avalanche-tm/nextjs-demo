import Logo from '@assets/logo.svg'
import Link from 'next/link'
import FooterLinkItem from './footer-link-item'

function Footer() {
  return (
    <footer className='border-t border-base-400/10 text-sm font-semibold py-10 mt-11 md:mx-22'>
      <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-10'>
        <div className='flex flex-col h-full items-bottom space-y-5 '>
          <Link href='/home'>
            <Logo />
          </Link>
          <div className='flex-1'>
            &copy; Copyright 2023 <br />
            Voicify AI LTD
          </div>
          <div>Keep rocking & sing your song.</div>
        </div>
        <ul className='space-y-3'>
          <li>
            <FooterLinkItem href='/'>Home</FooterLinkItem>
          </li>
          <li>
            <FooterLinkItem href='#'>Blog</FooterLinkItem>
          </li>
          <li>
            <FooterLinkItem href='#'>Settings</FooterLinkItem>
          </li>
          <li>
            <FooterLinkItem href='#'>Cartoons</FooterLinkItem>
          </li>
        </ul>
        <div className='flex flex-col gap-10'>
          <ul className='space-y-3 flex-1'>
            <li>
              <FooterLinkItem href='#'>Pricing</FooterLinkItem>
            </li>
            <li>
              <FooterLinkItem href='#'>Login</FooterLinkItem>
            </li>
            <li>
              <FooterLinkItem href='#'>Sign Up</FooterLinkItem>
            </li>
            <li>
              <FooterLinkItem href='#'>Forgot Password</FooterLinkItem>
            </li>
            <li>
              <FooterLinkItem href='#'>History</FooterLinkItem>
            </li>
          </ul>
          <ul className='space-y-3'>
            <li>
              <FooterLinkItem href='#'>Terms of Use</FooterLinkItem>
            </li>
            <li>
              <FooterLinkItem href='#'>Privacy Policy</FooterLinkItem>
            </li>
            <li>
              <FooterLinkItem href='#'>Refund Policy</FooterLinkItem>
            </li>
          </ul>
        </div>

        <ul className='space-y-3'>
          <li>
            <FooterLinkItem href='#'>Drizzy AI Model</FooterLinkItem>
          </li>
          <li>
            <FooterLinkItem href='#'>Juice AI Model</FooterLinkItem>
          </li>
          <li>
            <FooterLinkItem href='#'>Kanye AI Model</FooterLinkItem>
          </li>
          <li>
            <FooterLinkItem href='#'>Drizzy AI Model</FooterLinkItem>
          </li>
          <li>
            <FooterLinkItem href='#'>Juice AI Model</FooterLinkItem>
          </li>
          <li>
            <FooterLinkItem href='#'>Kanye AI Model</FooterLinkItem>
          </li>
          <li>
            <FooterLinkItem href='#'>Drizzy AI Model</FooterLinkItem>
          </li>
          <li>
            <FooterLinkItem href='#'>Juice AI Model</FooterLinkItem>
          </li>
          <li>
            <FooterLinkItem href='#'>Kanye AI Model</FooterLinkItem>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
