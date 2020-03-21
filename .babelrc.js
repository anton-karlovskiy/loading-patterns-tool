
const plugins = [
  [
    'transform-react-remove-prop-types',
    {
      'removeImport': true,
      'additionalLibraries': [
        '../../utils/shared-props'
      ]
    }
  ]
];

module.exports = {plugins};
