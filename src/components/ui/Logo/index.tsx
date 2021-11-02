import * as S from './styles'

export type LogoProps = {
  text?: string
  size?: 'normal' | 'large'
}

const Logo = ({ text = 'logo', size = 'normal' }: LogoProps) => (
  <S.Wrapper text={text} size={size}>
    <h1>{text}</h1>
  </S.Wrapper>
)

export default Logo
