import { SizeOptions, ColorTypes } from 'styles/theme'
import * as S from './styles'

export type ButtonProps = {
  children?: React.ReactNode
  size?: SizeOptions
  action?: ColorTypes
  outline?: boolean
}

const Button = ({
  children,
  size = 'medium',
  action = 'primary',
  outline = false
}: ButtonProps) => (
  <S.Wrapper size={size} action={action} outline={outline}>
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
