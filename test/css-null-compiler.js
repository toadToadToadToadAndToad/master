// this file is used by mocha to prevent imported css files
// from stopping tests from running as mocha sees the imported
// css as malformed javascript

function noop() {
  return null;
}

require.extensions['.css'] = noop;
