export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "令王",
    htmlAttrs: {
      lang: "ja"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "説明テキスト" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" },
      { rel: "stylesheet", href: "https://unpkg.com/ress/dist/ress.min.css" },
      { rel: "stylesheet", href: "assets/css/style.css" }
    ],
    script: [
      {
        src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js'
      },
      {
        src: 'assets/js/main.js'
      }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "./assets/sass/application.sass", // ここで bulma や shogi-player のスタイルを読み込む
  ],

  // yarn add --dev @nuxtjs/style-resources で使えるようになる
  // これを指定しないと +tablet や $primary が参照できない
  styleResources: {
    sass: [
      "./assets/sass/styleResources.scss", // sass の項目に scss のファイルを与えないと読み込まれないのは謎
    ],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/application.client.js",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // *.vue の style ブロックの中で +tablet や $primary が参照できるようにするため
    "@nuxtjs/style-resources",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    "nuxt-buefy",
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  // https://ja.nuxtjs.org/api/configuration-build/#transpile
  build: {
    transpile: [
      // クラス定数や "??" の読み込みで失敗する対策
      "shogi-player",
    ],

    // wav の読み込みで失敗する対策
    extend (config, ctx) {
      config.module.rules.push({
        test: /\.(ogg|mp3|mp4|m4a|wav|mpe?g)$/i,
        loader: "file-loader",
        options: {
          name: "blob/[name]-[contenthash].[ext]",
          // require("path/to/xxx.wav") が { default: "/_nuxt/blob/xxx.wav", __esModule: true, ...} になってしまう対策
          // https://github.com/webpack-contrib/file-loader#esmodule
          // false にすると単にパス "/_nuxt/blob/xxx.wav" になる
          esModule: false,
        },
      })
      config.module.rules.push({
        test: /\.(txt|md|kif|ki2|csa|sfen)$/,
        loader: "raw-loader",
      })
    },
  },
}
