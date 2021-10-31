import styled, { css } from 'styled-components'

import { LogoProps } from '.'

export const Wrapper = styled.div<LogoProps>`
  ${({ theme, color }) => css`
    content: ${color};
    color: ${color === 'light'
      ? theme.color.action.primary.active
      : theme.color.action.neutral.active};
    font-size: ${theme.font.size.large};
  `}
`
