import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Logo from '.'

describe('<Logo />', () => {
  it('should render with default text', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByRole('heading', { name: /Logo/i })).toBeInTheDocument()
  })

  it('should render the light version by default', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByRole('heading', { name: /Logo/i })).toHaveStyle({
      color: '#8943e3'
    })
  })

  it('should render a normal logo when size is default', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByRole('heading', { name: /Logo/i })).toHaveStyle({
      fontSize: '1.6rem'
    })
  })

  it('should render render a bigger logo', () => {
    renderWithTheme(<Logo size="large" />)
    expect(screen.getByRole('heading', { name: /Logo/i })).toHaveStyle({
      fontSize: '2.8rem'
    })
  })
})
