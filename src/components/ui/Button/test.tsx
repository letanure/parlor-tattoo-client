import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Button from '.'

describe('<Button />', () => {
  it('should render a a text inside', () => {
    renderWithTheme(<Button>Text</Button>)
    expect(screen.getByRole('button')).toHaveTextContent('Text')
  })

  it('should render a primary button by default', () => {
    renderWithTheme(<Button />)
    expect(screen.getByRole('button')).toHaveStyle({
      background: '#8943e3'
    })
  })

  it('should render a secondary if provided', () => {
    renderWithTheme(<Button action="secondary" />)
    expect(screen.getByRole('button')).toHaveStyle({
      background: '#26a69a'
    })
  })

  it('should render a bigger button if provided', () => {
    renderWithTheme(<Button size="xxlarge" />)
    expect(screen.getByRole('button')).toHaveStyle({
      fontSize: '2.8rem'
    })
  })

  it('should render a outline version if provided', () => {
    renderWithTheme(<Button outline />)
    expect(screen.getByRole('button')).toHaveStyle({
      background: 'transparent'
    })
  })

  it('should render a disabled version if provided', () => {
    renderWithTheme(<Button disabled />)
    expect(screen.getByRole('button')).toHaveStyle({
      cursor: 'not-allowed'
    })
  })
})
