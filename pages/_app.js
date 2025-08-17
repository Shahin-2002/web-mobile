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
      // آیا محصول قبلا وجود داره؟
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        // اگه هست، فقط تعدادش رو زیاد کن
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // اگه نیست، محصول جدید اضافه کن با تعداد 1
        Swal.fire({
          icon: "success",
          title: "محصول به سبد خرید اضافه شد",
          showConfirmButton: false,
          timer: 2000, // 2 ثانیه
          position: "top-end",
          toast: true,
        });
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <>
      <Header
        cart={cart}
        setCart={setCart}
        showCart={showCart}
        setShowCart={setShowCart}
      />

      <Component {...pageProps} addToCart={addToCart} cart={cart} />
      <Footer />
    </>
  );
}
