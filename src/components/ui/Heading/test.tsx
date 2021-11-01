import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Heading from '.'

describe('<Heading />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Heading>Text</Heading>)

    expect(screen.getByRole('heading', { name: /Text/i })).toBeInTheDocument()
  })
})
