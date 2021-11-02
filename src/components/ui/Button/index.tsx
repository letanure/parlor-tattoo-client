import { SizeOptions } from 'styles/theme'
import * as S from './styles'

export type ButtonProps = {
  children?: React.ReactNode
  size?: SizeOptions
  action?: 'primary' | 'secondary'
}

const Button = ({
  children,
  size = 'medium',
  action = 'primary'
}: ButtonProps) => (
  <S.Wrapper size={size} action={action}>
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
