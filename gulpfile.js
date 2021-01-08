const { src, dest } = require('gulp');
function task1() {
    return gulp
        .src('./a.js')
        .pipe(dest('./output/'));
}

function defaultTask(cb) {
    cb();
}

exports.default = defaultTask;