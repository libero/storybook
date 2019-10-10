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

  return config;
};
