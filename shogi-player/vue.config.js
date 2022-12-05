var webpack = require("webpack");

module.exports = {
  // ▼shogi-player 側のクラス定数 "static foo = 1" な表記が読み取れない問題に対処する
  // 原因は babel が node_modules 以下を除外しているため。
  // node_modules 以下であってもここで指定するとビルド対象になる
  // https://cli.vuejs.org/config/#transpiledependencies
  transpileDependencies: [
    "shogi-player",
  ],

  // KIF ファイルに全角スペースが入っているとビルドが通らない問題があるので、eslint を無効化
  lintOnSave: false,

  pages: {
    index: {
      // entry for the page
      entry: 'src/main.js',
      // the source template
      template: 'public/index.html',
      // output as dist/index.html
      filename: 'index.html',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Index Page',
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    hazimete: {
      // entry for the page
      entry: 'src/main.js',
      // the source template
      template: 'public/hazimete.html',
      // output as dist/hazimete.html
      filename: 'hazimete.html',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: '初めての方へ',
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },

    // when using the entry-only string format,
    // template is inferred to be `public/subpage.html`
    // and falls back to `public/index.html` if not found.
    // Output filename is inferred to be `subpage.html`.
    // subpage: 'src/subpage/main.js'
  },

  // ▼webpack5 で "Uncaught ReferenceError: process is not defined" になる問題に対処する
  // 4 まで必ず存在していた process が 5 から切り捨てられたため process を参照しているライブラリがことごとく失敗する
  // typedef process であらかじめチェックするように webpack のドキュメントに書いてあるがきりがない
  // これまで必ず存在する前提で process を参照しているため process を埋めた方がてっとり早い
  // この設定と合わせて yarn add process が必要
  // https://zenn.dev/szgk/articles/2d0843136d2fa8
  // https://webpack.js.org/migrate/5/#run-a-single-build-and-follow-advice
  // https://stackoverflow.com/questions/65018431/webpack-5-uncaught-referenceerror-process-is-not-defined
  // https://cli.vuejs.org/config/#configurewebpack
  // https://qiita.com/uturned0/items/5fdf2d92548274fe56e3
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        process: "process/browser",
      }),
    ],
  },
}
