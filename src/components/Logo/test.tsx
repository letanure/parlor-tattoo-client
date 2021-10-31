import { render, screen } from '@testing-library/react'

import Logo from '.'

describe('<Logo />', () => {
  it('should render the logo', () => {
    const { container } = render(<Logo onBackgroundColor="dark" text="Logo" />)

    expect(screen.getByRole('heading', { name: /Logo/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
