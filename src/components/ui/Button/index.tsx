import { SizeOptions, ColorTypes } from 'styles/theme'
import * as S from './styles'

export type ButtonProps = {
  action?: ColorTypes
  children?: React.ReactNode
  disabled?: boolean
  fullWidth?: boolean
  outline?: boolean
  size?: SizeOptions
}

const Button = ({
  action = 'primary',
  children,
  disabled = false,
  fullWidth = false,
  outline = false,
  size = 'medium'
}: ButtonProps) => (
  <S.Wrapper
    action={action}
    disabled={disabled}
    fullWidth={fullWidth}
    outline={outline}
    size={size}
  >
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
