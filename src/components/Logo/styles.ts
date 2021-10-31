import styled, { css } from 'styled-components'

import { LogoProps } from '.'

export const Wrapper = styled.div<LogoProps>`
  ${({ theme, hasDarkBg }) => css`
    color: ${theme.color.primary.on[hasDarkBg ? 'dark' : 'light']};
    font-size: ${theme.font.size.large};
  `}
`
