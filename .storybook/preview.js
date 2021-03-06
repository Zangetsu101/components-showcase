import { ThemeProvider } from 'styled-components'
import { light } from '../src/colors'

export const decorators = [
  (Story) => (
    <ThemeProvider theme={{ colors: light}}>
      <Story />
    </ThemeProvider>
  )
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
