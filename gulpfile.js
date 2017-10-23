//先es6转es5，再压缩js
var gulp = require('gulp');
var babel = require('gulp-babel'); //es6转es5
var uglify = require('gulp-uglify'); //js压缩插件
//压缩js
gulp.task('jsTask2', function(){
	gulp.src('js/*.js')
	.pipe(babel({"presets": ["es2015"]})) //es6转es5
	.pipe(uglify()) //js压缩
	.pipe(gulp.dest('jszip'));
});
gulp.task('default', ['jsTask2']);
