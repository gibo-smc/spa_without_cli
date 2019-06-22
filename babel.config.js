module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        'modules': false,
        targets: {
          ie: '11',
        }
      }
    ]
  ],
  // testでは'modules': falseにしないための設定
  env: {
    test: {
      presets: [
        [
          "@babel/preset-env", 
          { 
            targets: { 
              node: 'current' 
            }
          }
        ]
      ]
    }
  },
}
