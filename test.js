const expect = require('chai').expect;

const {camelize, capitalize} = require('./');

describe('takeoff-utils', () => {
    it('camelize', () => {
      expect(camelize('node-module')).to.equal('NodeModule');
      expect(camelize('Gnu General Public License V3.0', ' ')).to.equal('Gnu General Public License V3.0');
    });

    it('capitalize', () => {
      expect(capitalize('node-module')).to.equal('Node-module');
    });
});
