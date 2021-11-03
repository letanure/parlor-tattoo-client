import styled, { css, DefaultTheme } from 'styled-components'

import { ColorTypes } from 'styles/theme'
import { ButtonProps } from '.'

type WrapperProps = { hasIcon: boolean } & ButtonProps

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
  `,
  disabled: (theme: DefaultTheme, action: ColorTypes) => css`
    background-color: ${theme.color[action!].disabled.value};
    color: ${theme.color[action!].disabled.inverse};
    cursor: not-allowed;
  `,
  fullWidth: css`
    width: 100%;
  `,
  withIcon: () => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    svg {
      height: 1em;
      & + span {
        margin-left: 10px;
      }
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ action, disabled, fullWidth, hasIcon, outline, size, theme }) => css`
    background-color: ${theme.color[action!].normal.value};
    border-radius: 0.5ch;
    border: 1px solid ${theme.color[action!].normal.value};
    color: ${theme.color[action!].normal.inverse};
    cursor: pointer;
    font-size: ${theme.font.size[size!]};
    padding: 1ch 2ch;
    transition: all 0.1s ease-in-out;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    align-content: center;
    justify-content: space-between;
    align-items: center;
    &:hover {
      background-color: ${theme.color[action!].hover.value};
      border-color: ${theme.color[action!].hover.value};
      color: ${theme.color[action!].hover.inverse};
    }
    span {
      white-space: nowrap;
    }

    ${disabled && wrapperModifiers.disabled(theme, action!)}
    ${fullWidth && wrapperModifiers.fullWidth}
    ${hasIcon && wrapperModifiers.withIcon()}
    ${outline && wrapperModifiers.outline(theme, action!)}
  `}
`
