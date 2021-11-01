import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Text from '.'

describe('<Text />', () => {
  // TEXT
  it('should render with provided text', () => {
    renderWithTheme(<Text text="test" />)
    expect(screen.getByText(/test/i)).toBeInTheDocument()
  })

  it('should render with provided children text', () => {
    renderWithTheme(<Text>test</Text>)
    expect(screen.getByText(/test/i)).toBeInTheDocument()
  })

  // TAG
  it('should render with tag P by default', () => {
    renderWithTheme(<Text text="test" />)
    expect(screen.getByText(/test/i).tagName).toBe('P')
  })

  it('should render with the provided tag', () => {
    renderWithTheme(<Text text="test" tag="span" />)
    expect(screen.getByText(/test/i).tagName).toBe('SPAN')
  })

  // SIZE
  it('should render a medium size text by default', () => {
    renderWithTheme(<Text text="test" />)
    expect(screen.getByText(/test/i)).toHaveStyle({
      fontSize: '1.6rem'
    })
  })

  it('should render render a bigger text', () => {
    renderWithTheme(<Text text="test" size="large" />)
    expect(screen.getByText(/test/i)).toHaveStyle({
      fontSize: '1.8rem'
    })
  })

  // DECORATION
  it('should render render normal text by default', () => {
    renderWithTheme(<Text text="test" />)
    expect(screen.getByText(/test/i)).toHaveStyle({
      fontWeight: 400,
      fontStyle: 'normal'
    })
  })

  it('should render render italic text', () => {
    renderWithTheme(<Text text="test" decoration="italic" />)
    expect(screen.getByText(/test/i)).toHaveStyle({
      fontStyle: 'italic'
    })
  })

  it('should render render bold text', () => {
    renderWithTheme(<Text text="test" decoration="bold" />)
    expect(screen.getByText(/test/i)).toHaveStyle({
      fontWeight: 600
    })
  })

  it('should render render a bold italic text', () => {
    renderWithTheme(<Text text="test" decoration="boldItalic" />)
    expect(screen.getByText(/test/i)).toHaveStyle({
      fontStyle: 'italic',
      fontWeight: 600
    })
  })
})
