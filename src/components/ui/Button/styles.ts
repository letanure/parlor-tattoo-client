import styled, { css, DefaultTheme } from 'styled-components'

import { ColorTypes } from 'styles/theme'
import { ButtonProps } from '.'

type WrapperProps = ButtonProps

const wrapperModifiers = {
  outline: (theme: DefaultTheme, action: ColorTypes) => css`
    background-color: transparent;
    border: 1px solid ${theme.color[action!].normal.value};
    color: ${theme.color[action!].normal.value};
    &:hover {
      background-color: ${theme.color[action!].hover.value};
      border-color: ${theme.color[action!].hover.value};
      color: ${theme.color[action!].hover.inverse};
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, action, size, outline }) => css`
    background-color: ${theme.color[action!].normal.value};
    border-radius: 0.5ch;
    border: 1px solid ${theme.color[action!].normal.value};
    color: ${theme.color[action!].normal.inverse};
    cursor: pointer;
    font-size: ${theme.font.size[size!]};
    padding: 1ch 2ch;
    transition: all 0.1s ease-in-out;
    &:hover {
      background-color: ${theme.color[action!].hover.value};
      border-color: ${theme.color[action!].hover.value};
      color: ${theme.color[action!].hover.inverse};
    }

    ${outline && wrapperModifiers.outline(theme, action!)}
  `}
`
