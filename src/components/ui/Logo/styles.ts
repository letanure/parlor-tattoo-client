import styled, { css } from 'styled-components'

import { LogoProps } from '.'

const wrapperModifiers = {
  normal: (sizes: { [key: string]: string }) => css`
    font-size: ${sizes['medium']};
  `,
  large: (sizes: { [key: string]: string }) => css`
    font-size: ${sizes['xxlarge']};
  `
}

export const Wrapper = styled.div<LogoProps>`
  h1 {
    ${({ theme, size }) => css`
      color: ${theme.color.primary.normal.value};

      ${!!size && wrapperModifiers[size](theme.font.size)}
    `}
  }
`
// font-size: ${theme.font.size.large};
