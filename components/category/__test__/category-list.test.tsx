import { categories } from '@/lib/category/categories'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import CategoryList from '../category-list'

jest.mock('@/components/icon', () => ({
  // __esModule: true,
  default: 'SvgIconMock',
}))

describe('CategoryList', () => {
  it('renders correctly', () => {
    render(<CategoryList />)
    const categoryElements = screen.getAllByRole('link')
    expect(categoryElements).toHaveLength(categories.length)
    categories.forEach((category, index) => {
      expect(categoryElements[index]).toHaveTextContent(category.name)
      expect(categoryElements[index]).toHaveAttribute('href', '#')
    })
  })
})
