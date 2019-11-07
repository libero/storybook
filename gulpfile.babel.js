import jest from 'gulp-jest';
import gulp from 'gulp';

const path = {
  sassFiles: 'src/**/*.scss',
  sassTests: 'test/sass/**/*.scss',
  sassTestsEntryPoint: 'test/sass/sass.test.js',
};

export const testSass = () => gulp.src(path.sassTestsEntryPoint).pipe(jest({ reporter: 'spec' }));

export const watchSass = () => gulp.watch([path.sassFiles, path.sassTests], gulp.series(testSass));

export const watch = gulp.parallel(watchSass);

export default () => {};
