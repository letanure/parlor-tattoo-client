import { SizeOptions, ColorTypes } from 'styles/theme'
import * as S from './styles'

export type ButtonProps = {
  action?: ColorTypes
  children?: React.ReactNode
  disabled?: boolean
  outline?: boolean
  size?: SizeOptions
}

const Button = ({
  action = 'primary',
  children,
  disabled = false,
  outline = false,
  size = 'medium'
}: ButtonProps) => (
  <S.Wrapper action={action} disabled={disabled} outline={outline} size={size}>
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
