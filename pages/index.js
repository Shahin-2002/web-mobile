import React, { useEffect } from "react";
import SearchInput from "../components/module/searchInput.jsx/searchInput.jsx";
import SwiperPage from "@/components/module/SwiperPage/SwiperPage.jsx";
import SaleCountdown from "../components/module/SaleCountdown/saleCountdown.jsx";
import Category from "@/components/module/Category/category.jsx";
import ProductSpecial from "@/components/module/ProductSpecial/productSpecial.jsx";
import BanerFooter from "@/components/module/BanerFooter/banerFooter.jsx";
export default function Home({products , menus  , addToCart}) {

  

  return (
    <>
      <SearchInput />
      <SwiperPage />
      <SaleCountdown endTime="2025-08-20T23:59:59" />
      <Category data={menus} />
      <ProductSpecial data={products} addToCart={addToCart} />
      <BanerFooter />
    </>
  );
}

export async function getServerSideProps() {
  const resProducts = await fetch("/api/products");
  const products = await resProducts.json();

  const resMenus = await fetch("/api/menus");
  const menus = await resMenus.json();
  return { props: { products , menus } }; // این props به کامپوننت میره
}

