// webpack.config.js
const path = require('path'); // conecta la ruta a la configuración de webpack
const HtmlWebpackPlugin = require('html-webpack-plugin'); // plugin para generar el index.html
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // plugin de conexión 
// conecta mini-css-extract-plugin al proyecto
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); 

module.exports = {
  devtool: 'inline-source-map', // para que webpack nos de el mapa de la app
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: ''
  },
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, './dist'), // especifica una carpeta desde donde servir la aplicación y su contenido
    compress: true, // esto acelerará la carga de archivos en el modo de desarrollo
    port: 8080, // abrirá tu página en localhost:8080 (puedes usar otro puerto)
    open: true, // se abrirá automáticamente en el navegador después de ejecutar npm run dev
    // stats: 'errors-only' //solo sale cuando se producen errores
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: "/node_modules/"
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { importLoaders: 1 } 
          },
          "postcss-loader"
        ],
      },
      {test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
      type: "asset/resource"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
            inject: true,
            template: "./src/index.html",
            filename: `index.html`,
            chunks: ['main']
        } // ruta a nuestro archivo index.html}
    ),
    new CleanWebpackPlugin(), // utiliza plugin
    new MiniCssExtractPlugin() // utiliza plugin
  ],
} 