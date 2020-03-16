const path = require('path')

module.exports = {
  modify: (config, { target, dev }, webpack) => {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, './src'),
      },
    }

    return config
  },
}
