export default function handler(req, res) {
  const menus = [
    {
      id: 1,
      name: "لوازم‌جانبی ",
      image: "/Images/headphone.png", // عکس داخل public/images
    },
    {
      id: 2,
      name: "یکبار مصرف",
      image: "/Images/K.png",
    },
    {
      id: 3,
      name: "سلامت",
      image: "/Images/G.png",
    },
    {
      id: 4,
      name: "لوازم تحریر",
      image: "/Images/M.png",
    },
    {
      id: 5,
      name: "افزودنی ها",
      image: "/Images/H.png",
    },
    {
      id: 6,
      name: "خشکبار، شیرینی",
      image: "/Images/J.png",
    },
    {
      id: 7,
      name: "کنسروی و  آماده",
      image: "/Images/A.png",
    },
    {
      id: 8,
      name: "تنقلات",
      image: "/Images/B.png",
    },
    {
      id: 9,
      name: "منجمد، یخچالی",
      image: "/Images/C.png",
    },
    {
      id: 10,
      name: "آرایشی بهداشتی",
      image: "/Images/E.png",
    },
    {
      id: 11,
      name: "مادر و کودک",
      image: "/Images/F.png",
    },
    {
      id: 12,
      name: "بهداشت خانگی",
      image: "/Images/I.png",
    },
    {
      id: 13,
      name: "شور و ترشیجات",
      image: "/Images/O.png",
    },
    {
      id: 14,
      name: "نوشیدنی ",
      image: "/Images/D.png",
    },
    {
      id: 15,
      name: "لبنیات",
      image: "/Images/milk.png",
    },
    {
      id: 16,
      name: "پروتئینی",
      image: "/Images/P.png",
    },
    {
      id: 17,
      name: "اساسی و خواربار",
      image: "/Images/L.png",
    },
    {
      id: 18,
      name: "صبحانه",
      image: "/Images/Q.png",
    },
    {
      id: 19,
      name: "نان و شیرینی",
      image: "/Images/R.png",
    },
    {
      id: 20,
      name: "میوه، سبزیجات",
      image: "/Images/N.png",
    },


  ];

  res.status(200).json(menus);
}