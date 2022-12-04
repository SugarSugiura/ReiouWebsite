【設計書】
REIOU
 ├─img
 │  ├─favicon.ico
 │  ├─logo.svg
 │  └─item1.jpg ～ item16.jpg
 │
 ├─css
 │  └─style.css
 │
 ├─js
 │  └─main.js
 │
 ├─REIOUwebsite.html
 ├─yagura.html
 ├─sanken.html
 ├─nakahisya.html
 ├─shiken.html
 ├─kakugawari.html
 ├─products.html
 ├─hazimete.html
 └─aigakari.html

【REIOU】
header
・学習、戦法一覧、紹介、プラン、お問い合わせ
main
・紹介をするところ
　→初心者はこちらから学習
　→

会員登録→グーグルでログインなど
お問い合わせ→
盤の埋め込み→さがちゃん、きまさん

### TODO

- [ ] shogi-playerとマージ
- [x] テンプレートライブラリ入れる
- [ ] マルチページモード https://cli.vuejs.org/config/#pages -> shogi-player 自体の js は一つだけ。kif ファイルごとにビルドが必要ないはずで、ならば js を html-webpack-plugin で inject するほどのことはなさそう
- [ ] 開発時、テンプレート書き換えしたタイミングで、手動でサーバーを再起動しなくていいようにする (-> nodemon?)
- [ ] ejs に切り替え(node.jsを使うなら、express標準のやつを使うのがよさそう)
- [ ] yarn run serveが動くようにする
- [ ] コンテナ起動時に、yarn startする
- [ ] devcontainerの設定を整理
= [ ] プレイヤーのコメントを表示
- [ ] kifファイルを渡せるようにする
- [ ] コンテンツの運用を考える
= [ ] デプロイ周り