module.exports = async ({ config }) => {
  config.module.rules.push(
    {
      test: /\.twig$/,
      use: [
        {
          loader: 'twig-loader',
          options: {
            allow_async: true,
            autoescape: true,
            strict_variables: true,
          },
        },
      ],
    },
  );

  config.module.rules.push(
    {
      test: /\.(scss)$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            sourceMap: true,
            importLoaders: 1,
          },
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
          },
        },
      ],
    },

  );

  return config;
};
