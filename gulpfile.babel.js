/* eslint-disable no-console */

import gulp from 'gulp';
import jest from 'gulp-jest';
import postcss from 'gulp-postcss';
import reporter from 'postcss-reporter';
import stylelint from 'stylelint';
import syntaxScss from 'postcss-scss';

const appPath = {
  sassFiles: 'src/**/*.scss',
  sassTests: 'test/sass/**/*.scss',
  sassTestsEntryPoint: 'test/sass/sass.test.js',
};

export const lintSass = () => {
  const processors = [
    stylelint(),
    reporter(
      {
        clearMessages: true,
        throwError: true,
      },
    ),
  ];

  return gulp.src(appPath.sassFiles)
    .pipe(postcss(processors, { syntax: syntaxScss }));
};

const testSass = () => gulp.src(appPath.sassTestsEntryPoint).pipe(jest({ reporter: 'spec' }));

export const validateSass = gulp.series(lintSass, testSass);

export const watchSass = () => gulp.watch([appPath.sassFiles, appPath.sassTests], gulp.series(validateSass));

export const watch = gulp.parallel(watchSass);

export default () => {};
