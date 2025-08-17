// pages/api/products.js
export default function handler(req, res) {
  const products = [
    {
      id: 1,
      name: "روغن زیتون بکر کریستال - 5 لیتر",
      image: "/Images/spogety.png", // عکس داخل public/images
      price: 40000,
      discount: 10,
      priceBeforeDiscount: 40000,
      priceAfterDiscount: 36000,
      off: 10,
    },
    {
      id: 2,
      name: "محصول نمونه ۲",
      image: "/Images/spogety.png",
      price: 50000,
      discount: 15,
      priceBeforeDiscount: 50000,
      priceAfterDiscount: 42500,
      off: 15,
    },
    {
      id: 3,
      name: "محصول نمونه ۳",
      image: "/Images/spogety.png",
      price: 60000,
      discount: 5,
      priceBeforeDiscount: 60000,
      priceAfterDiscount: 57000,
      off: 5,
    },
    {
      id: 4,
      name: "محصول نمونه 4",
      image: "/Images/placeHolder.png",
      price: 60000,
      discount: 5,
      priceBeforeDiscount: 60000,
      priceAfterDiscount: 57000,
      off: 5,
    },
  ];

  res.status(200).json(products);
}
