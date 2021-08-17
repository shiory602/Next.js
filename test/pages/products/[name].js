// export default function Name() {
//   return <h1>商品のページです</h1>;
// }

// import { useRouter } from "next/router";
// export default function Name() {
//   const router = useRouter();
//   return <h1>商品{router.query.name}のページです</h1>;
// }


import { useRouter } from "next/router";
export default function Name() {
  const router = useRouter();
  console.log(router.query);
  return <h1>商品{router.query.name}のページです</h1>;
}