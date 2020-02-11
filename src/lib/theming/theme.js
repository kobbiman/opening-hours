const greyColors = {
  grey1: '#F8F8F8',
  grey2: '#EEEEEE',
  grey3: '#A1A2A4',
  grey4: '#696a6c',
}

export const breakpoints = ['576px', '768px', '992px', '1280px']

export const theme = {
  breakpoints,

  fontSizes: [12, 14, 16, 20, 22, 24, 30, 32, 48, 64],
  colors: {
    white: '#ffffff',
    black: '#202125',
    green: '#5BCB02',
    text: '#202125',
    background: greyColors.grey1,
    ...greyColors,
  },

  space: [0, 4, 8, 12, 16, 32, 64, 128, 256],
  fonts: {
    body: 'Roboto, sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontWeights: {
    body: 400,
    medium: 500,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1,
  },
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    large: '0 0 24px rgba(0, 0, 0, .125)',
  },
  text: {
    fontFamily: 'body',
    fontSize: 2,
    lineHeight: '22px',
    h1: {
      fontWeight: 'bold',
      fontSize: 5,
      lineHeight: '30px',
    },
    h2: {
      variant: 'text.h1',
      fontSize: 3,
      lineHeight: '26px',
    },
    h3: {
      fontSize: 2,
      fontWeight: 'medium',
      lineHeight: '22px',
    },
    h4: {
      variant: 'text.h1',
      fontSize: 0,
      lineHeight: '16px',
    },
    caption: {
      fontWeight: 'bold',
      fontSize: 0,
      textTransform: 'uppercase',
      lineHeight: '16px',
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
  },
}
