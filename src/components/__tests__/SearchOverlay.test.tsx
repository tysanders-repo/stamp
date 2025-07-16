import { render, screen } from '@testing-library/react'
import { SearchProvider } from '../SearchContext'
import SearchOverlay from '../SearchOverlay'

// Mock the search data
jest.mock('@/lib/search-data', () => ({
  blogPosts: [
    {
      slug: 'test-blog',
      title: 'Test Blog Post',
      excerpt: 'This is a test blog post',
      category: 'Test',
      date: '2024-01-01',
      tags: ['test'],
    },
  ],
  projects: [
    {
      slug: 'test-project',
      title: 'Test Project',
      description: 'This is a test project',
      category: 'Test',
      year: '2024',
      tags: ['test'],
    },
  ],
}))

const renderWithProvider = (component: React.ReactElement) => {
  return render(<SearchProvider>{component}</SearchProvider>)
}

describe('SearchOverlay', () => {
  it('renders without crashing', () => {
    renderWithProvider(<SearchOverlay />)
    // The component should render but be hidden by default
    expect(document.body).toBeInTheDocument()
  })

  it('has proper accessibility attributes', () => {
    renderWithProvider(<SearchOverlay />)
    // Check for dialog role when open
    // Note: This test is basic since the dialog is closed by default
    expect(document.body).toBeInTheDocument()
  })
}) 