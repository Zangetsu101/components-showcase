import 'styled-components'
import { IColors } from './colors'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: IColors
  }
}
