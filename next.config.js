const nextConfig = {
  onDemandEntries: {
    // Period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 120 * 1e3, // default 25s
    // Number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 3, // default 2
  },

  serverRuntimeConfig: {},
  publicRuntimeConfig: {},
}

module.exports = nextConfig
