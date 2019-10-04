const path = require('path');

module.exports = async ({ config }) => {
  config.module.rules.push({
    test: /\.twig$/,
    use: [
      {
        loader: path.resolve(__dirname, './loaders/twig-loader-plus.js'),
        options: {
          path: './src/patterns',
        },
      },
      {
        loader: 'twig-loader',
        options: {
          allow_async: true,
          autoescape: true,
          strict_variables: true,
        },
      },
    ],
  });

  return config;
};
