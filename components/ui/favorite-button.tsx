'use client'

import { cn } from '@/lib/utils'
import { useState } from 'react'
import { Icon } from '../icon'
import { Button } from './button'

type FavoriteButtonProps = {
  className?: string
}

function FavoriteButton({ className }: FavoriteButtonProps) {
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <Button
      variant='ghost'
      onClick={() => setIsFavorite(!isFavorite)}
      className={cn('rounded-full cursor-pointer hover:bg-base-100/50 p-2', className)}
    >
      <Icon
        name='Heart'
        className={cn('text-base-0 fill-none', isFavorite && 'fill-accent')}
      />
    </Button>
  )
}

export default FavoriteButton
