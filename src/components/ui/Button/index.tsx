import { SizeOptions, ColorTypes } from 'styles/theme'
import * as S from './styles'

export type ButtonProps = {
  action?: ColorTypes
  children?: React.ReactNode
  disabled?: boolean
  fullWidth?: boolean
  icon?: JSX.Element
  outline?: boolean
  size?: SizeOptions
}

const Button = ({
  action = 'primary',
  children,
  disabled = false,
  fullWidth = false,
  icon,
  outline = false,
  size = 'medium'
}: ButtonProps) => (
  <S.Wrapper
    action={action}
    disabled={disabled}
    fullWidth={fullWidth}
    hasIcon={!!icon}
    outline={outline}
    size={size}
  >
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
