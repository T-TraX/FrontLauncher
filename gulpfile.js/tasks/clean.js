var gulp   = require('gulp')
var del    = require('del')
var path   = require('path')
var config = require('../config')

var cleanTask = function (cb) {
  del([config.root.dest]).then(function (paths) {
    cb()
  })
  del([path.resolve(config.root.src,config.tasks.sass.src,'_icons.scss')]).then(function (paths) {
    cb()
  })
}

gulp.task('clean', cleanTask)
module.exports = cleanTask