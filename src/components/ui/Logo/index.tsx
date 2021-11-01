import * as S from './styles'

export type LogoProps = {
  hasDarkBg?: boolean
  text?: string
  size?: 'normal' | 'large'
}

const Logo = ({
  hasDarkBg = false,
  text = 'logo',
  size = 'normal'
}: LogoProps) => (
  <S.Wrapper hasDarkBg={hasDarkBg} text={text} size={size}>
    <h1>{text}</h1>
  </S.Wrapper>
)

export default Logo
