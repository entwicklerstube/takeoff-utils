# takeoff-utils
Utility set of functions used at the [`takeoff`](https://github.com/entwicklerstube/takeoff) Project.

### Utils
#### `camelize`
```js
expect(camelize('node-module')).to.equal('NodeModule');
expect(camelize('Gnu General Public License V3.0', ' ')).to.equal('Gnu General Public License V3.0');
```

#### `capitalize`
```js
expect(capitalize('node-module')).to.equal('Node-module');
```
