import { css } from 'styled-components'

const themeHover = css`
  color: inherit;

  &:hover {
    color: ${({ theme }) => theme.colors.red};
  }
`

const themeUnderline = css`
  text-decoration: underline;
  text-decoration-color: ${({ theme }) => theme.colors.red};
`

export { themeHover, themeUnderline }
