// used to get path to module

const path = require('path');
const fs = require('fs');

function exists(filename) {
  try {
    const stat = fs.statSync(filename);
    return true;
  } catch (e) {
    return false;
  }
}

function getModulePath(name) {
  for (const dirname of require.resolve.paths(name)) {
    const filename = path.join(dirname, name);
    console.log('checking:', path.join(dirname, name));
    if (exists(filename)) {
      return filename;
    }
  }
}

module.exports = {
  monacoEditor: getModulePath('monaco-editor'),
};
