import * as S from './styles'

export type TextProps = {
  text?: string
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'
  tag?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  decoration?: 'normal' | 'italic' | 'bold' | 'boldItalic'
  children?: React.ReactNode
}

const Text = ({
  text,
  size = 'medium',
  tag = 'p',
  decoration = 'normal',
  children
}: TextProps) => (
  <S.Wrapper text={text} size={size} as={tag} decoration={decoration}>
    {text}
    {children}
  </S.Wrapper>
)

export default Text
