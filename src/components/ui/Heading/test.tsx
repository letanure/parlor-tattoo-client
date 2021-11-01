import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import 'jest-styled-components'

import Heading from '.'

describe('<Heading />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Heading>Text</Heading>)

    expect(screen.getByRole('heading', { name: /Text/i })).toBeInTheDocument()
  })

  it('should render a line left', () => {
    renderWithTheme(<Heading linePosition="left">Text</Heading>)

    expect(screen.getByRole('heading', { name: /Text/i })).toHaveStyleRule(
      'left',
      '0',
      {
        modifier: '::after'
      }
    )
  })

  it('should render a line bottom', () => {
    renderWithTheme(<Heading linePosition="bottom">Text</Heading>)
    expect(screen.getByRole('heading', { name: /Text/i })).toHaveStyleRule(
      'bottom',
      '0',
      {
        modifier: '::after'
      }
    )
  })

  it('should render a line with primary color by default', () => {
    renderWithTheme(<Heading linePosition="left">Text</Heading>)

    expect(screen.getByRole('heading', { name: /Text/i })).toHaveStyleRule(
      'background-color',
      '#8943e3',
      {
        modifier: '::after'
      }
    )
  })

  it('should render a line with secondary color if set', () => {
    renderWithTheme(
      <Heading linePosition="left" lineColor="secondary">
        Text
      </Heading>
    )

    expect(screen.getByRole('heading', { name: /Text/i })).toHaveStyleRule(
      'background-color',
      '#26a69a',
      {
        modifier: '::after'
      }
    )
  })
})
