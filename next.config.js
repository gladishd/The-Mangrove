/** How To Solve Module Not Found Can’t Resolve ‘fs’ in Next.js | Maikel Veen
https://maikelveen.com/blog/how-to-solve-module-not-found-cant-resolve-fs-in-nextjs */

// module.exports = {
//   webpack: (config, { isServer }) => {
//     // Fixes npm packages that depend on `fs` module
//     // if (!isServer) {
//     //   config.node = {
//     //     fs: 'empty',
//     //     ...config.node,
//     //   }
//     // }
//     return config
//   }
// }
// module.exports = (env){
//   webpack: (config, { isServer }) => {
//     env: {
//       resolve: {
//         fallback: {
//           fs: false, // do not include a polyfill for abc
//         }
//       }
//     },
//     if (!isServer) {
//       config.node = {
//         fs: 'empty',
//         ...config.node,
//       }
//     }
//   },

// };

const path = require('path');

module.exports = {
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
};

// module.exports = (env, config) => {
//   // Use env.<YOUR VARIABLE> here:
//   console.log('Goal: ', env.goal); // 'local'
//   console.log('Production: ', env.production); // true

//   return {
//     output: {
//       entry: './index.js',
//       filename: 'bundle.js',
//       path: path.resolve(__dirname, 'dist'),
//       env: {
//         resolve: {
//           fallback: {
//             fs: false, // do not include a polyfill for abc
//           }
//         }
//       },
//     },
//   };
// };
//https://stackoverflow.com/questions/64361940/webpack-error-configuration-node-has-an-unknown-property-fs
//https://github.com/webpack/webpack/issues/11649
//https://webpack.js.org/configuration/resolve/#resolvefallback
//https://stackoverflow.com/questions/73761438/warning-invalid-next-config-js-when-running-project-nextjs
