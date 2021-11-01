import styled, { css } from 'styled-components'

import { TextProps } from '.'

const wrapperModifiers = {
  normal: () => css`
    font-weight: 400;
    font-style: normal;
  `,
  italic: () => css`
    font-style: italic;
  `,
  bold: () => css`
    font-weight: 600;
  `,
  boldItalic: () => css`
    font-style: italic;
    font-weight: 600;
  `
}

export const Wrapper = styled.div<TextProps>`
  ${({ theme, size, decoration }) => css`
    font-size: ${theme.font.size[size!]};
    content: ${decoration};
    margin: 0;
    padding: 0;

    ${!!decoration && wrapperModifiers[decoration]}
  `}
`
