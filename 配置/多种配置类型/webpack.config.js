const webpack = require('webpack')
// module.exports = function(env, argv) {
//     console.log(env,argv)
//     console.log(argv['env'])
//       return {
//         devtool: env.production ? 'source-maps' : 'eval',
        
//       };
//     }


// module.exports = (env,argv) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(env,argv)
//       resolve({
//                 devtool: env.production ? 'source-maps' : 'eval',
                
//               }
//     , 5000)
//   })
// })
// }


module.exports = [{
  output: {
    filename: 'dist/dist-amd.js',
    libraryTarget: 'amd'
  },
  entry: './src/app.js',
}, {
  output: {
    filename: 'dist/dist-commonjs.js',
    libraryTarget: 'commonjs'
  },
  entry: './src/app.js',
}]