import React from 'react';
import { useEffect } from 'react';
import {
  ShoppingBasketIcon,
  ArrowForwardIcon,
  LogoHeader,
} from '@/components/ui/iconsAndImagrs';

function Header({ cart, showCart, setShowCart, setCart }) {
  useEffect(() => {
    if (showCart) {
      document.body.style.overflow = 'hidden'; // غیرفعال کردن اسکرول صفحه
    } else {
      document.body.style.overflow = 'auto'; // فعال کردن دوباره اسکرول
    }
  }, [showCart]);
  return (
    <div className="w-full md:max-w-sm md:mx-auto p-4 flex items-center justify-between border-b-2 border-[#EAE8E8] px-5 relative">
      {/* سمت راست */}
      <div className="flex items-center gap-2">
        <ArrowForwardIcon size={28} color="#C0C0C0" />
        <img src={LogoHeader} alt="logo header" />
      </div>

      {/* سمت چپ */}
      <div>
        <button
          className="border p-2 rounded-md w-10 h-10 flex items-center justify-center border-[#C0C0C0] relative"
          onClick={() => setShowCart(!showCart)}
        >
          <ShoppingBasketIcon size={16} color="#C0C0C0" />
          {/* تعداد محصولات */}
          {cart.length > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
              {cart.length}
            </span>
          )}
        </button>

        {/* مدال سبد خرید */}
        {showCart && (
          <div
            className="fixed inset-0 flex justify-center items-start z-50 mt-20 shadow-lg"
            onClick={() => setShowCart(false)}
          >
            <div
              className="bg-white p-4 rounded-2xl w-80 max-h-[60vh] shadow-xl relative flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="font-bold text-lg mb-3 border-b pb-2">
                🛒 سبد خرید
              </h2>

              {cart.length === 0 ? (
                <p className="text-gray-500 text-center py-8">سبد خرید خالیه</p>
              ) : (
                <ul className="flex-1 overflow-y-auto space-y-3 pr-2">
                  {cart.map((item, i) => (
                    <li
                      key={i}
                      className="flex justify-between items-start border-b pb-2"
                    >
                      <div className="flex flex-col gap-1 w-3/4">
                        <span
                          className="font-medium text-sm truncate"
                          title={item.name}
                        >
                          {item.name}
                        </span>
                        <span className="text-[#BA400B] font-bold text-xs">
                          {item.priceAfterDiscount.toLocaleString('fa-IR')}{' '}
                          تومان
                        </span>
                        {/* دکمه‌های کم و زیاد */}
                        <div className="flex items-center gap-2 mt-1">
                          <button
                            className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
                            onClick={() => {
                              const newCart = [...cart];
                              if (newCart[i].quantity > 1)
                                newCart[i].quantity--;
                              setCart(newCart);
                              localStorage.setItem(
                                'cart',
                                JSON.stringify(newCart)
                              );
                            }}
                          >
                            −
                          </button>
                          <span className="text-sm font-medium">
                            {item.quantity}
                          </span>
                          <button
                            className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
                            onClick={() => {
                              const newCart = [...cart];
                              newCart[i].quantity++;
                              setCart(newCart);
                              localStorage.setItem(
                                'cart',
                                JSON.stringify(newCart)
                              );
                            }}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <button
                        className="text-red-500 text-sm hover:text-red-700 transition-colors"
                        onClick={() => {
                          const newCart = cart.filter(
                            (_, index) => index !== i
                          ); // حذف محصول از آرایه
                          setCart(newCart); // به‌روزرسانی state
                          localStorage.setItem('cart', JSON.stringify(newCart)); // به‌روزرسانی localStorage
                        }}
                      >
                        ❌
                      </button>
                    </li>
                  ))}
                </ul>
              )}

              {cart.length > 0 && (
                <div className="mt-3 border-t pt-3 flex justify-between font-bold text-sm">
                  <span>جمع کل:</span>
                  <span>
                    {cart
                      .reduce(
                        (sum, item) =>
                          sum + item.priceAfterDiscount * item.quantity,
                        0
                      )
                      .toLocaleString('fa-IR')}{' '}
                    تومان
                  </span>
                </div>
              )}

              <button
                className="mt-4 w-full bg-[#BA400B] text-white py-2 rounded-xl hover:bg-[#a73600] transition-all text-sm"
                onClick={() => setShowCart(false)}
              >
                بستن
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
