const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    main: [('./src/js/index.js'), ('./src/sass/style.scss')]
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, '../', 'dist'),
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
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader', // Procesuje CSS z PostCSS
            options: {
              postcssOptions: {
                plugins: [
                  require('autoprefixer'),
                ],
              },
            },
          },
          'sass-loader']
      },
      {
        test: /\.(jpg|png|svg|gif|jpeg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name][ext]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]',
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
      template: "src/index.html",
      title: "nowa aplikacja",
      filename: 'index.html',
      minify: {
        collapseWhitespace: true
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'css/style.css'
    }),
    new CopyPlugin(
      {
        patterns: [
          {
            from: 'src/assets/img',
            to: 'img'
          },
          {
            from: 'src/assets/translations',
            to: 'translations'
          }
        ]
      }),
  ]
}
