import { defaultTheme } from '../src/styles/themes/default'
import { GlobalStyle } from '../src/styles/global'
import type { Preview } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import { withThemeFromJSXProvider } from '@storybook/addon-themes'

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'light',
          value: '#E7EDF4',
        },
        {
          name: 'dark',
          value: '#040F1A',
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    }
  },
  decorators: [
    withThemeFromJSXProvider({
      GlobalStyles: GlobalStyle,
      Provider: ThemeProvider,
      themes: {
        defaultTheme
      }
    })
  ]
}

export default preview
