import Header from "@/components/module/Header/header";
import Footer from "@/components/module/Footer/footer";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  // بارگذاری cart از localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  // ذخیره cart در localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);

      if (existing) {
        const newQuantity = existing.quantity + 1; // تعداد جدید
        Swal.fire({
          icon: "success",
          title: `${newQuantity} عدد ${product.name} در سبد خرید است`,
          showConfirmButton: false,
          timer: 2000,
          position: "top-end",
          toast: true,
        });

        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: newQuantity } : item
        );
      } else {
        Swal.fire({
          icon: "success",
          title: `1 عدد ${product.name} به سبد خرید اضافه شد`,
          showConfirmButton: false,
          timer: 2000,
          position: "top-end",
          toast: true,
        });

        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <div className="relative min-h-screen">
      {/* هدر چسبیده به بالا */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white">
        <Header
          cart={cart}
          setCart={setCart}
          showCart={showCart}
          setShowCart={setShowCart}
        />
      </div>

      <main className="pt-[70px] pb-[120px]">
        <Component {...pageProps} addToCart={addToCart} cart={cart} />
      </main>

      <div className="fixed  bottom-0 left-0 w-full z-50 bg-white">
        <Footer />
      </div>
    </div>
  );
}
