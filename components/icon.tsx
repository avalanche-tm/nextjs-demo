import CryptoCoinBold from '@assets/icons/crypto-coin-bold.svg'
import CryptoCoin from '@assets/icons/crypto-coin.svg'
import Head from '@assets/icons/head.svg'
import Home from '@assets/icons/home.svg'
import Send from '@assets/icons/send.svg'
import Soundwave from '@assets/icons/soundwave.svg'

export const icons = {
  CryptoCoin,
  CryptoCoinThick: CryptoCoinBold,
  Head,
  Home,
  Send,
  Soundwave,
}

// define your icon sizes here
const sizeMap = {
  sm: { width: '16', height: '16' },
  md: { width: '24', height: '24' },
  lg: { width: '32', height: '32' },
}

export type IconProps = {
  name: keyof typeof icons
  size?: 'sm' | 'md' | 'lg'
  fill?: string
  stroke?: string
  width?: string
  height?: string
  className?: string
}

export const Icon = ({ name, ...props }: IconProps) => {
  const Icon = icons[name]
  const { width, height } = props.size ? sizeMap[props.size] : sizeMap.md
  return <Icon width={width} height={height} {...props} />
}
