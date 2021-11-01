import * as S from './styles'

export type HeadingProps = {
  children: React.ReactNode
  lineColor?: 'primary' | 'secondary'
  linePosition?: null | 'left' | 'bottom'
}

const Heading = ({
  children,
  lineColor = 'primary',
  linePosition
}: HeadingProps) => (
  <S.Wrapper lineColor={lineColor} linePosition={linePosition}>
    {children}
  </S.Wrapper>
)

export default Heading
