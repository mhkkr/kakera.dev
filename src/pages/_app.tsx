import Header from '../components/header'
import Footer from '../components/footer'

import 'katex/dist/katex.css'

export default ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme === 'LIGHT' ? lightTheme : darkTheme}>
      <>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </>
    </ThemeProvider>
  )
}

import styled, { createGlobalStyle } from 'styled-components'

const theme = 'LIGHT'
const lightTheme = {
}
const darkTheme = {
}

const GlobalStyle = createGlobalStyle`
  // reset
  *,
  ::before,
  ::after {
    box-sizing: inherit;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
  }
  ::before,
  ::after {
    text-decoration: inherit;
    vertical-align: inherit;
  }
  main {
    display: block;
  }
  h1, h2, h3, h4, h5, h6, p {
    &:first-child { margin-top: 0; }
    &:last-child { margin-bottom: 0; }
  }
  img {
    vertical-align: bottom;
    max-width: 100%;
    
    &[src$=".svg"]:not([width]),
    &[src*=".svg?"]:not([width]) {
      width: 100%;
    }
  }
  svg {
    max-width: 100%;
    fill: currentColor;
  }
  [disabled] {
    cursor: not-allowed;
  }
  [href], [for],
  [type="button"], [type="reset"], [type="submit"],
  [role="button"],
  button {
    cursor: pointer;
  }
  button {
    background-color: transparent;
    border: none;
    outline: none;
    padding: 0;
    appearance: none;
  }
  select::-ms-expand {
    display: none;
  }

  [class] {
    border-collapse: collapse;
    border-spacing: 0;
    border: 0;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  html.sp[class] * {
    outline: none;

    input[type], textarea, select {
      font-size: 16px;
    }
  }

  :root {
    --font-size: 1.6rem;
    
    --family-base: -apple-system, Segoe UI, sans-serif;
    
    --text-decoration-static: none;
    --text-decoration-dynamic: underline;
    
    --color-font: #333;
    --color-link: #0044CC;

    --color-bg-dark: #2f3437;
    --color-bg-light-dark: #efefef;
    
    --color-twitter: #1da1f2;
    --color-instagram: #e1306c;
    --color-googleanalytics: #E97329;
    --color-nicovideo: #252525;
    --color-github: #333;
  }

  // base
  html {
    font-size: 62.5%;
    margin: 0;
    padding: 0;
    
    // @include _break-change {
    //   font-size: 62.5% * $break-fontsize;
    // }
  }
  body {
    box-sizing: border-box;
    color: var(--color-font);
    -webkit-font-smoothing: antialiased;
    font-family: var(--family-base);
    font-size: var(--font-size);
    margin: 0;
    overflow-x: hidden;
    overflow-y: scroll;
    padding: 0;
    -webkit-text-size-adjust: 100%;
    word-break: break-all;
  }
  a {
    color: var(--color-link);
    text-decoration: var(--text-decoration-static);
    &:hover {
      text-decoration: var(--text-decoration-dynamic);
    }
  }

  .phrase {
    display: inline-block;
  }
`
const ThemeProvider = styled.div`
`