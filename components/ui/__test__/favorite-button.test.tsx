import { fireEvent, render } from '@testing-library/react'
import FavoriteButton from '../favorite-button'

jest.mock('@assets/icons/tiktok.svg', () => 'svg')
jest.mock('@/components/icon', () => ({
  // __esModule: true,
  default: 'SvgIconMock',
}))

describe('FavoriteButton', () => {
  test('should toggle favorite state when clicked', () => {
    const { getByRole } = render(<FavoriteButton />)
    const button = getByRole('button')

    // Initial state should be false
    expect(button).toHaveClass('fill-none')

    // Click the button
    fireEvent.click(button)

    // State should be true after clicking
    expect(button).toHaveClass('fill-accent')

    // Click the button again
    fireEvent.click(button)

    // State should be false again
    expect(button).toHaveClass('fill-none')
  })
})
