import { createGlobalStyle } from 'styled-components'
import { fontFamily } from 'styles/fonts'

const GlobalStyles = createGlobalStyle`
html {
    height: 100%;
}
body {
    height: 100%;
    font-family: ${fontFamily};
    margin: 0;
    box-sizing: border-box;
}
`
export default GlobalStyles
