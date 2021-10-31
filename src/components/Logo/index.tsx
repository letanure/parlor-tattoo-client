import * as S from './styles'

export type LogoProps = {
  hasDarkBg?: boolean
  text?: string
}

const Logo = ({ hasDarkBg = false, text = 'logo' }: LogoProps) => (
  <S.Wrapper hasDarkBg={hasDarkBg} text={text}>
    <h1>{text}</h1>
  </S.Wrapper>
)

export default Logo
