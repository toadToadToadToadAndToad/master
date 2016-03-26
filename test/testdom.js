module.exports = function (markup) {
  const jsdom = require('jsdom').jsdom;

  if (typeof document !== 'undefined') return;
  global.document = jsdom(markup || '');
  global.window = document.parentWindow;
  global.navigator = {
    userAgent: 'node.js',
  };
};
