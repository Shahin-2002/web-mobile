import React, { useEffect } from "react";
import SearchInput from "../components/module/searchInput.jsx/searchInput.jsx";
import SwiperPage from "@/components/module/SwiperPage/SwiperPage.jsx";
import SaleCountdown from "../components/module/SaleCountdown/saleCountdown.jsx";
import Category from "@/components/module/Category/category.jsx";
import ProductSpecial from "@/components/module/ProductSpecial/productSpecial.jsx";
import BanerFooter from "@/components/module/BanerFooter/banerFooter.jsx";
export default function Home({ products, menus, addToCart }) {
  return (
    <main className=" max-w-[500px] mx-auto">
      <SearchInput />
      <SwiperPage />
      <SaleCountdown endTime="2028-05-05T23:59:59" />
      <Category data={menus} />
      <ProductSpecial data={products} addToCart={addToCart} />
      <BanerFooter />
    </main>
  );
}

export async function getServerSideProps(context) {
  const baseUrl = "http://" + context.req.headers.host;

  const resProducts = await fetch(`${baseUrl}/api/products`);
  const products = await resProducts.json();

  const resMenus = await fetch(`${baseUrl}/api/menus`);
  const menus = await resMenus.json();

  return {
    props: { products, menus },
  };
}
