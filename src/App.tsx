import { ThemeProvider } from "styled-components"

import { defaultTheme } from "../styles/themes/defaultTheme"
import { GlobalStyle } from "../styles/global"

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Hello World</h1>
      <input type="text" />
      <GlobalStyle />
    </ThemeProvider>
  )
}