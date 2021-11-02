import styled, { css } from 'styled-components'

import { ButtonProps } from '.'

type WrapperProps = Pick<ButtonProps, 'size' | 'action'>

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, action, size }) => css`
    background-color: ${theme.color[action!].normal.value};
    color: ${theme.color[action!].normal.inverse};
    border: 0;
    font-size: ${theme.font.size[size!]};
    padding: 1ch 2ch;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    border-radius: 0.5ch;
    &:hover {
      background-color: ${theme.color[action!].hover.value};
      color: ${theme.color[action!].hover.inverse};
    }
  `}
`
