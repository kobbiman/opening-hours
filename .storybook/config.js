import { configure, addParameters, addDecorator } from '@storybook/react'
import { theme, GlobalStyle } from '@lib/theming'
import { ThemeProvider } from 'styled-components'
import { Normalize } from 'styled-normalize'
import './style.css'

addParameters({
  options: {
    storySort: (a, b) => {
      // We want the Welcome story at the top
      if (a[1].kind === 'Welcome') {
        return -1
      }

      // Sort the other stories by ID
      // https://github.com/storybookjs/storybook/issues/548#issuecomment-530305279
      return a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, { numeric: true })
    },
  },
})
// Using StoryFn as component instead of invoking it
addDecorator(StoryFn => (
  <ThemeProvider theme={theme}>
    <Normalize />
    <GlobalStyle />
    <StoryFn />
  </ThemeProvider>
))

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/)

// the first argument can be an array too, so if you want to load from different locations or
// different extensions, you can do it like this: configure([req1, req2], module)
configure(req, module)
