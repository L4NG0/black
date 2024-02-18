const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: "source-map",
  cache: {
    type: "memory",
  },
  entry: {
    main: './src/js/index.js',
    style: './src/sass/style.scss'
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, '../dist')
  },
  devServer: {
    open: true,
    static: {
      directory: path.join(__dirname, '../', 'src')
    },
    port: 5001
  },
  resolve: {
    alias: {
      Assets: path.resolve(__dirname, '../src/assets/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: 'raw-loader'
      },
      {
        test: /\.(sc|c)ss$/,
        use: ['style-loader',
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } }]
      },
      {
        test: /\.(jpg|png|svg|gif|jpeg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name][contenthash:6][ext]',
        },
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            ["@babel/preset-env", { useBuiltIns: 'usage', corejs: "2.0.0" }]
          ],
          plugins: [
            "@babel/plugin-proposal-class-properties"
          ]
        }
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "src/index2.html",
      title: "nowa aplikacja"
    }),
  ]
}
