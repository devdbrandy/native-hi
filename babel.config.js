module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.jsx',
          '.json',
          '.tsx',
          '.ts',
          '.native.js',
          '.svg',
          '.png',
        ],
        alias: {
          '@holie/assets': './src/assets',
          '@holie/components': './src/components',
          '@holie/models': './src/models',
          '@holie/navigation': './src/navigation',
          '@holie/screens': './src/screens',
          '@holie/services': './src/services',
          '@holie/theme': './src/theme',
          '@holie/utils': './src/utils',
        },
      },
    ],
  ],
};
