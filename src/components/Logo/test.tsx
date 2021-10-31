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
    expect(
      screen.getByRole('heading', { name: /Logo/i }).parentElement
    ).toHaveStyle({
      color: '#8943e3'
    })
  })

  it('should render the light version when hasDarkBg is true', () => {
    renderWithTheme(<Logo hasDarkBg={true} />)
    expect(
      screen.getByRole('heading', { name: /Logo/i }).parentElement
    ).toHaveStyle({
      color: '#be93f9'
    })
  })
})
