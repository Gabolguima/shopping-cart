// babel.config.js
// eslint-disable-next-line no-undef
exports.plugins = [
  '@babel/plugin-transform-class-properties',
  '@babel/plugin-transform-nullish-coalescing-operator',
  '@babel/plugin-transform-numeric-separator',
  '@babel/plugin-transform-optional-chaining',
  '@babel/plugin-transform-private-methods',
  [
    '@babel/plugin-proposal-decorators',
    { legacy: true },
  ],
];
