// export default function Home() {
//   return <h1>Hello Next.js</h1>;
// }


// import Link from "next/link";
// export default function Home() {
//   return (
//     <div>
//       <ul>
//         <li>
//           <Link href="/about">
//             <a>About</a>
//           </Link>
//         </li>
//       </ul>
//       <h1>Hello Next.js</h1>
//     </div>
//   );
// }


// import Link from "next/link";
// const products = [{ name: "bag" }, { name: "shoes" }, { name: "socks" }];
// export default function Home() {
//   return (
//     <div>
//       <ul>
//         {products.map((product) => {
//           return (
//             <li key={product.name}>
//               <Link href={`/products/${product.name}`} >
//                 <a>{product.name}</a>
//               </Link>
//             </li>
//           );
//         })}
//         <li>
//           <Link href="/about">
//             <a>About</a>
//           </Link>
//         </li>
//       </ul>
//       <h1>Hello Next.js</h1>
//     </div>
//   );
// }



// import Link from 'next/link';
// import Head from 'next/head';
// export default function Home() {
//   return (
//     <div>
// <Head>
//   <title>トップページ</title>
//   <meta name="description" content="これはトップページです" />
//   <meta property="og:title" content="トップページ" />
//   <meta property="og:description" content="これはトップページ" />
// </Head>
//       <ul>
//         <li>
//           <Link href="/about">
//             <a>About</a>
//           </Link>
//         </li>
//       </ul>
//       <h1>Hello Next.js</h1>
//     </div>
//   );
// }




import Link from 'next/link';
import Head from 'next/head';
const products = [{ name: 'bag' }, { name: 'shoes' }, { name: 'socks' }];
export default function Home() {
  return (
    <div>
      <Head>
        <title>{products[0].name}</title>
        <meta name="description" content={`${products[0].name}のページ`} />
        <meta property="og:title" content={products[0].name} />
        <meta
          property="og:description"
          content={`${products[0].name}のページ`}
        />
      </Head>
      <ul>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
      <h1>Hello Next.js</h1>
    </div>
  );
}

