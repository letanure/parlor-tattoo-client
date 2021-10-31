import * as S from './styles'

export type LogoProps = {
  color?: 'light' | 'dark'
  text?: string
}

const Logo = ({ color = 'light', text = 'logo' }: LogoProps) => (
  <S.Wrapper color={color} text={text}>
    <h1>{text}</h1>
  </S.Wrapper>
)

export default Logo
