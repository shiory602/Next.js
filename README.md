# Next.js の特徴
https://reffect.co.jp/react/next-js#i-2

## フォルダー
### public
ブラウザからアクセスできる
`http://localhost:3000/vercel.svg`で`vercel.svg`ファイルがブラウザで表示される。



## 静的ファイル〜別のページを作成するルーティング〜
Next.jsではpagesディレクトリにJavaScriptファイルを作成するだけで自動でルーティングが設定されるため簡単にページを追加することができる。

1. pagesディレクトリの下にabout.jsファイルを作成。
2. index.jsと同様に下記のコードを記述。
3. h1タグの中身と関数名のみ変更。

```js
export default function About() {
  return <h1>About Page</h1>;
}
```
ブラウザで`http://localhost:3000/about`ページにアクセスするとAbout Pageが表示される。
Next.jsを利用するとルーティングの設定を行うことなく簡単にページが作成できることが確認できる。

## 動的ファイルの作成(ダイナミックルーティング)
productsは商品一覧を意味し、products/bagだけではなく/products/shoesにアクセスしてもページが表示されるように設定。

bag, shoesなどそれぞれに対応したファイルbag.js, shoes.jsファイルを作成するのではなくダイナミックルーティングを利用してURLのproduct/の次にどんな文字列を入れてもブラウザにファイルの内容が表示されるように設定。

productsディレクトリの下にスクエアブラケットで囲まれた`[name].js`ファイルを作成。

```js
export default function Name() {
  return <h1>商品のページです</h1>;
}
```
/products/bagでもアクセス可能で`bag.js`ファイルの内容が表示されますが、bagをclothesやshoesに変更すると”商品のページです”が表示される。

### Dynamic Routing
URLをclothesやshoesに変更しても同じ”商品のページです”が表示されるのでURLに入れた文字列をページ内容に表示させるためuseRouterフックを利用。
useRouterフックを利用することでアクセスしてきたURLによって動的にページの内容を変更することができる。

**useRouterフックはnext/routerからimport。**

```js
import { useRouter } from "next/router";
export default function Name() {
  const router = useRouter();
  return <h1>商品{router.query.name}のページです</h1>;
}
```
URLに含まれる文字列はrouter.query.nameから取得することができます。

ブラウザで確認するとURLに含まれる文字列を表示することができました。

