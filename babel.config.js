module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@lib': './src/lib',
          '@hooks': './src/hooks',
          '@components': './src/components',
          '@containers': './src/containers',
          '@hoc': './src/hoc',
          '@store': './src/store',
          '@mockdb': './mockdb',
        },
      },
    ],
    ['babel-plugin-styled-components', { ssr: true }],
  ],

  env: {
    test: {
      plugins: [[`babel-plugin-styled-components`, { ssr: false, displayName: false }]],
    },
  },
}
