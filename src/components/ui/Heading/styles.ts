import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

import { HeadingProps } from '.'

const wrapperModifiers = {
  linePosition: (
    theme: DefaultTheme,
    lineColor: 'primary' | 'secondary',
    position: string
  ) => css`
    content: ${position};
    position: relative;

    ${position === 'left' &&
    css`
      padding-left: 1rem;
      &::after {
        background-color: ${theme.color[lineColor].on.light};
        content: '';
        display: block;
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 0.8rem;
      }
    `}

    ${position === 'bottom' &&
    css`
      &::after {
        background-color: ${theme.color[lineColor].on.light};
        bottom: 0;
        content: '';
        display: block;
        height: 0.8rem;
        left: 0;
        position: absolute;
        width: 5rem;
      }
    `}
  `
}

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, lineColor, linePosition }) => css`
    font-size: ${theme.font.size.xlarge};
    line-height: 4rem;

    ${media.greaterThan('medium')`
    font-size: ${theme.font.size.xxlarge};
    `}

    ${linePosition &&
    wrapperModifiers.linePosition(theme, lineColor!, linePosition)}
  `}
`
