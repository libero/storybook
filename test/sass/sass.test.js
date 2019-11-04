/**
 * @jest-environment node
 */

const glob = require('glob');
const sassTrue = require('sass-true');


glob.sync('**/*.spec.scss')
  .forEach((file) => {
    sassTrue.runSass(
      {
        file,
      },
      {
        describe,
        it,
        // eslint-disable-next-line global-require
        sass: require('sass'),
      },
    );
  });
