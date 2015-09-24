require('babel/register');
require('css-modules-require-hook')({
  generateScopedName: function(exportedName, path) {
    var sanitisedPath = path.replace(/\.[^\.\/\\]+$/, '').replace(/[\W_]+/g, '-').replace(/^-|-$/g, '');
    return `${sanitisedPath}___${exportedName}`;
  }
});
require('./server');
