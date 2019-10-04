const path = require('path');
const { getOptions, stringifyRequest } = require('loader-utils');

module.exports = function twigLoaderPlus(source) {
  // Get loader configuration.
  const options = getOptions(this);
  // Twig path, from configuration passed to loader.
  const twigPath = options.path ? path.resolve(process.cwd(), options.path) : process.cwd();
  // Include path, expected by twig (`this.resource` is an absolute path to twig template)
  const includePath = path.relative(twigPath, this.resource);

  // Return the same module as `twig-loader` but with additional export for reference.
  return [
    source,
    `module.exports.reference = function(args) { return { template: './${stringifyRequest(includePath)}', arguments: args }; };`,
  ].join('\n');
};
