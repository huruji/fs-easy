var fs = require('fs');

function mkdir(path, callback) {
  var pathArr = path.toString().split('/');
  for(var i = 1; i < pathArr.length; i++) {
    var newPath = pathArr.slice(0,i+1).join('/');
    console.log(newPath);
    var exists = fs.existsSync(newPath);
    if(exists) {
      return;
    }
    fs.mkdirSync(newPath);
  }
  callback && callback();
}

module.exports = mkdir;