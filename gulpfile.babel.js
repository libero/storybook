import gulp from 'gulp';
import jest from 'gulp-jest';

const appPath = {
  sassFiles: 'src/**/*.scss',
  sassTests: 'test/sass/**/*.scss',
  sassTestsEntryPoint: 'test/sass/sass.test.js',
};

export const testSass = () => gulp.src(appPath.sassTestsEntryPoint).pipe(jest({ reporter: 'spec' }));

export const watchSass = () => gulp.watch([appPath.sassFiles, appPath.sassTests], gulp.series(testSass));

export const watch = gulp.parallel(watchSass);

export default () => {};
