const path = require('path');
const proxyquire = require('proxyquire');
const request = require('supertest');
const jsdom = require('jsdom');
const app = require('../../api/app');
const assert = require('assert');
const R = require('ramda');
const {JSDOM} = jsdom;

describe('module 1', () => {
  context('index.html', () => {
    let form;
    let fileInput;
    let submitButton;

    beforeEach((done) => {
      jsdomError = undefined;
      JSDOM.fromFile(path.resolve(__dirname, '../../client', 'index.html'))
          .then((dom) => {
            form = dom.window.document.getElementsByTagName('form')[0];
            fileInput = form.children[0];
            submitButton = form.children[1];
            done();
          })
          .catch((err) => {
            jsdomError = err;
            done();
          });
    });

    context('Form', () => {
      

     

     

      
    });

    context('File Input', () => {
      

      
    });

    context('Submit Button', () => {
      

    
    });
  });

  context('app.js unit tests', () => {
    let useSpy;
    let staticStub;
    let pathResolveStub;

    beforeEach(() => {
      useSpy = sinon.spy();
      pathResolveStub = sinon.stub().returns('/root');
      staticStub = sinon.stub();

      proxyquire('../../api/app', {
        express: sinon.stub().returns({
          use: useSpy,
        }),
        path: {
          resolve: pathResolveStub,
        },
      });
    });

    afterEach(() => {
      sinon.restore();
    });

    


    
  });

  context('app.js integration tests', () => {
    
  });
});
