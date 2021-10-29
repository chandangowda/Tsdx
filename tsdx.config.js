const postcss = require('rollup-plugin-postcss');
const static_files = require('rollup-plugin-static-files');
const image = require('@rollup/plugin-image');


module.exports = {
    rollup(config) {
     
      config.plugins.push(
        postcss({
          plugins: [],
        })
      );
      config.plugins = [
        images(),
        ...config.plugins,
      ]
      return config;
    },
  };

 
