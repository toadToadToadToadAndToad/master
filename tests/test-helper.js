import jsdom from 'jsdom';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';

chai.should();
chai.use(chaiImmutable);

// setup pure JS DOM implementaton that runs in NodeJS for
// testing components without need of browser/Karma
const doc = jsdom.jsdom('<!doctype html><html><body></body></html');
const win = doc.defaultView;
global.document = doc;
global.window = win;

Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key];
  }
});
