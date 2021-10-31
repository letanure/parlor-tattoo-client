import styled, { css } from 'styled-components'

import { LogoProps } from '.'
//  @typescript-eslint/no-non-null-assertion
export const Wrapper = styled.div<LogoProps>`
  ${({ theme, onBackgroundColor }) => css`
    color: ${theme.color.primary.on[onBackgroundColor!]};
    font-size: ${theme.font.size.large};
  `}
`
