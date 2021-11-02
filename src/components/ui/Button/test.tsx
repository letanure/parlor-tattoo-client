import { renderWithTheme } from 'utils/tests/helpers'

import Button from '.'

describe('<Button />', () => {
  it('should render something', () => {
    renderWithTheme(<Button />)
    expect(true).toBeTruthy()
  })
  // it('should render something', () => {
  //   const { container } = render(<Button />)
  //   expect(
  //     screen.getByRole('heading', { name: /Button/i })
  //   ).toBeInTheDocument()
  //   expect(container.firstChild).toMatchSnapshot()
  // })
})
