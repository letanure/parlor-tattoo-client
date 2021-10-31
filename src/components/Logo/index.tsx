import * as S from './styles'

export type LogoProps = {
  onBackgroundColor: 'dark' | 'light'
  text: string
}

const Logo = ({ onBackgroundColor, text = 'logo' }: LogoProps) => (
  <S.Wrapper onBackgroundColor={onBackgroundColor} text={text}>
    <h1>{text}</h1>
  </S.Wrapper>
)

export default Logo
