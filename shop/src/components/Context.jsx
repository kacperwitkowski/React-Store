import { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [products] = useState({
    products: [
      {
        id: "1",
        title: "Mike Infinity Run",
        src:
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/0aaf3ec6-4f6a-405d-89cb-4e54cbbdc384/meskie-buty-do-biegania-react-infinity-run-flyknit-PwBwDb.jpg",
        images: [
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/0aaf3ec6-4f6a-405d-89cb-4e54cbbdc384/meskie-buty-do-biegania-react-infinity-run-flyknit-PwBwDb.jpg",
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/7490132e-7f51-4156-991b-1e2b51bcb0a8/meskie-buty-do-biegania-react-infinity-run-flyknit-PwBwDb.jpg",
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/1719c758-5e99-48af-ae5f-bb59ff592e72/meskie-buty-do-biegania-react-infinity-run-flyknit-PwBwDb.jpg",
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/a0a30fe1-49d6-4504-a83f-c872bdc372af/meskie-buty-do-biegania-react-infinity-run-flyknit-PwBwDb.jpg",
        ],
        category: "Running",
        content:
          "The Mike React Infinity Run is designed to help reduce injury and keep you on the run. More foam and improved upper details provide a secure and cushioned feel",
        price: 79.99,
        colors: ["white", "black", "#19CBE7", "#782E98"],
        sizes: [40, 41, 42, 43, 44, 45],
        count: 1,
      },
      {
        id: "2",
        title: "Mike Air Force 1",
        src:
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e0b2f247-7f7f-4ae0-ac24-60aa8adc8012/buty-meskie-air-force-1-07-t78SQt.jpg",
        images: [
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e0b2f247-7f7f-4ae0-ac24-60aa8adc8012/buty-meskie-air-force-1-07-t78SQt.jpg",
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/1fa04cc9-5fb0-4621-92d1-eac076873f47/buty-meskie-air-force-1-07-t78SQt.jpg",
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/45b10e4c-98c2-4eb2-a048-a0bde1497d80/buty-meskie-air-force-1-07-t78SQt.jpg",
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/5a3d98d1-ce93-4116-9625-591228cd3393/buty-meskie-air-force-1-07-t78SQt.jpg",
        ],
        category: "Lifestyle",
        content:
          "These legendary low-tops mixes streetwear with old-school basketball vibes. Plus, the Air-Sole unit adds the cushioning you know and love—like the ’82 OG.",
        price: 119.99,
        colors: ["white", "#0646C5"],
        sizes: [40, 41, 42, 43, 44, 45],
        count: 1,
      },
      {
        id: "3",
        title: "Mike Air Max",
        src:
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/3fea947f-8a54-43f1-adf3-a47c1e69e10e/buty-meskie-air-max-sc-qqWL2v.jpg",
        images: [
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/3fea947f-8a54-43f1-adf3-a47c1e69e10e/buty-meskie-air-max-sc-qqWL2v.jpg",
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/4bf07b67-8343-4e32-9dea-85833e8ab329/buty-meskie-air-max-sc-qqWL2v.jpg",
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/bf3ad9ce-9508-4def-93ba-e63558c4a6a2/buty-meskie-air-max-sc-qqWL2v.jpg",
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/7e6436e4-f57f-40d7-ae47-1e04e7daf155/buty-meskie-air-max-sc-qqWL2v.jpg",
        ],
        category: "Lifestyle",
        content:
          "Nothing as fly, nothing as comfortable, nothing as proven—the Mike Air Max 90 stays true to its OG roots with the iconic Waffle outsole, stitched overlays and classic TPU accents.",
        price: 89.99,
        colors: ["white", "red", "#10364D"],
        sizes: [40, 41, 42, 43, 44, 45],
        count: 1,
      },
      {
        id: "4",
        title: "Zoom Freak 2",
        src:
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/4dad5d73-269d-493f-898e-0230ede11d1b/buty-do-koszykowki-zoom-freak-2-nMs9rl.jpg",
        images: [
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/4dad5d73-269d-493f-898e-0230ede11d1b/buty-do-koszykowki-zoom-freak-2-nMs9rl.jpg",
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/9ebb1536-28c8-410b-a13a-7cf69ad9a096/buty-do-koszykowki-zoom-freak-2-nMs9rl.jpg",
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/6263f161-e2d1-4c04-a0ec-c3ba4255e899/buty-do-koszykowki-zoom-freak-2-nMs9rl.jpg",
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/4cc6aa2c-6d17-4470-8944-26b51eb17fff/buty-do-koszykowki-zoom-freak-2-nMs9rl.jpg",
        ],
        category: "Basketball",
        content:
          "The Zoom Freak 2 is shoe that helps keep you fresh, giving you back the energy you need to let your game do the talking when it counts.",
        price: 99.99,
        colors: ["black", "white", "#8FCAEC"],
        sizes: [40, 41, 42, 43, 44, 45],
        count: 1,
      },
      {
        id: "5",
        title: "Mike Manoa",
        src:
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/rorabfpoffxpmekxfaq7/buty-meskie-manoa-XFVKPS.jpg",
        images: [
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/rorabfpoffxpmekxfaq7/buty-meskie-manoa-XFVKPS.jpg",
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/d8t5htyokkdaovqpchki/buty-meskie-manoa-XFVKPS.jpg",
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/uebysqqnv7pida2nzx2c/buty-meskie-manoa-XFVKPS.jpg",
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/bwut3qap2csdxoxrstv7/buty-meskie-manoa-XFVKPS.jpg",
        ],
        category: "Lifestyle",
        content:
          "Built to tackle tough terrain or city streets, the Mike Manoa Men's Boot has a cushioned midsole and a solid rubber outsole inspired by the trail for superb traction over any surface.",
        price: 129.99,
        colors: ["#D29D03", "white", "black"],
        sizes: [40, 41, 42, 43, 44, 45],
        count: 1,
      },
      {
        id: "6",
        title: "Mike Air Presto",
        src:
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/4b769b24-6dd6-4207-9f16-b3c3848fd2b2/air-presto-id-shoe.jpg",
        images: [
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/4b769b24-6dd6-4207-9f16-b3c3848fd2b2/air-presto-id-shoe.jpg",
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/5a80fc42-dd7a-4f75-b4fe-df004443d23c/air-presto-id-shoe.jpg",
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ff497df3-86be-499b-abd7-4332ecb5a642/air-presto-id-shoe.jpg",
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/35d96188-c979-4523-be5d-d9aec8679326/air-presto-id-shoe.jpg",
        ],
        category: "Running",
        content:
          "Designed for comfort with an easy slip-in design and a plastic cage for stability, they're built for play, adventure and everything in between.",
        price: 59.99,
        colors: ["white", "#B9BDBD", "crimson", "black"],
        sizes: [40, 41, 42, 43, 44, 45],
        count: 1,
      },
      {
        id: "7",
        title: "Mike Court Vapor",
        src:
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/2a63d15b-1d6b-4992-880c-66f1572e6ea3/meskie-buty-do-tenisa-twarde-korty-nikecourt-react-vapor-nxt-KkrQ2H.jpg",
        images: [
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/2a63d15b-1d6b-4992-880c-66f1572e6ea3/meskie-buty-do-tenisa-twarde-korty-nikecourt-react-vapor-nxt-KkrQ2H.jpg",
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/d984f29c-fc6a-4769-8016-dfdba54e6e50/meskie-buty-do-tenisa-twarde-korty-nikecourt-react-vapor-nxt-KkrQ2H.jpg",
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/8776ff66-9638-46b7-95b6-db87abee2e73/meskie-buty-do-tenisa-twarde-korty-nikecourt-react-vapor-nxt-KkrQ2H.jpg",
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/60a6a9c4-1643-4396-a6ad-37f2715418b8/meskie-buty-do-tenisa-twarde-korty-nikecourt-react-vapor-nxt-KkrQ2H.jpg",
        ],
        category: "Tenis",
        content:
          "Meet the next generation of tennis performance. Mike Court Vapor brings top-notch traction and an innovative cushioning system so you can play at your best during your fastest and fiercest matches.",
        price: 159.99,
        colors: ["black", "#35EEF4", "white", "#D4AF37"],
        sizes: [40, 41, 42, 43, 44, 45],
        count: 1,
      },
      {
        id: "8",
        title: "Mike Air Zoom BB",
        src:
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b02930db-e1e5-4f5c-abed-f9c6f0e248cf/buty-do-koszykowki-air-zoom-bb-nxt-sisterhood-QWgT6N.jpg",
        images: [
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b02930db-e1e5-4f5c-abed-f9c6f0e248cf/buty-do-koszykowki-air-zoom-bb-nxt-sisterhood-QWgT6N.jpg",
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/46b5e851-09c3-4abe-8a82-b137b789faa5/buty-do-koszykowki-air-zoom-bb-nxt-sisterhood-QWgT6N.jpg",
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/84bcad3d-0611-4d31-b90e-da34eaa26cc4/buty-do-koszykowki-air-zoom-bb-nxt-sisterhood-QWgT6N.jpg",
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/01cdc79b-04fc-4b59-b1da-be2a2d827431/buty-do-koszykowki-air-zoom-bb-nxt-sisterhood-QWgT6N.jpg",
        ],
        category: "Basketball",
        content:
          "The b-ball OG that puts a fresh spin on what you know best: crisp leather, bold colors and the perfect amount of flash to make you shine. This iteration turns back the clock for a vintage college hoops look.",
        price: 79.99,
        colors: ["white", "#0F81D8", "black", "#EDE5BE"],
        sizes: [40, 41, 42, 43, 44, 45],
        count: 1,
      },
      {
        id: "9",
        title: "Mike SuperRep Go",
        src:
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/3801b141-5e5e-4a83-a7dd-306c64f1cc50/meskie-buty-treningowe-superrep-go-50pC6z.jpg",
        images: [
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/3801b141-5e5e-4a83-a7dd-306c64f1cc50/meskie-buty-treningowe-superrep-go-50pC6z.jpg",
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ecef21d4-7623-4cab-b001-7194889791ce/meskie-buty-treningowe-superrep-go-50pC6z.jpg",
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/919eb724-5092-423c-b36a-e8f85a0c98cd/meskie-buty-treningowe-superrep-go-50pC6z.jpg",
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/96c1c3dc-5bd9-474a-9c58-94336f60f408/meskie-buty-treningowe-superrep-go-50pC6z.jpg",
        ],
        category: "Fitness",
        content:
          "The Mike SuperRep Go combines comfortable foam cushioning, flexibility and support to get you moving in circuit-based fitness classes or while streaming workouts at home.",
        price: 39.99,
        colors: ["#1740AF", "#FBCEB1", "white", "#BDE195"],
        sizes: [40, 41, 42, 43, 44, 45],
        count: 1,
      },
      {
        id: "10",
        title: "Mike React Metcon",
        src:
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/d5e5a0e6-2027-4c4d-baf9-92137eda3342/buty-treningowe-react-metcon-turbo-QbCB2d.jpg",
        images: [
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/d5e5a0e6-2027-4c4d-baf9-92137eda3342/buty-treningowe-react-metcon-turbo-QbCB2d.jpg",
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/5e227d2f-0a9d-4385-a788-947b8c745375/buty-treningowe-react-metcon-turbo-QbCB2d.jpg",
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/77728a3a-1ea8-4e71-93c2-a03acceb915a/buty-treningowe-react-metcon-turbo-QbCB2d.jpg",
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/7b351805-a01d-4fd3-a3a5-28b54a6dea2f/buty-treningowe-react-metcon-turbo-QbCB2d.jpg",
        ],
        category: "Baseball",
        content:
          "The Mike React Metcon helps keep your foot cool when you're going full steam. It stands up to the push and pull of heavily weighted and high-intensity workouts, delivering stability and durability.",
        price: 109.99,
        colors: ["black", "#BEFF75", "white"],
        sizes: [40, 41, 42, 43, 44, 45],
        count: 1,
      },
    ],
  });

  const [total, setTotal] = useState(0);
  const [btnActive, setBtnActive] = useState(false);
  let [cart, setCart] = useState([]);
  const [list, setList] = useState([]);
  const [disableBtn, setDisableBtn] = useState(false);

  const addCart = (id) => {
    const check = cart.every((prod) => {
      return prod.id !== id;
    });
    if (check) {
      const data = products.products.filter((prod) => {
        return prod.id === id;
      });
      setCart([...cart, ...data]);

      setBtnActive(true);
      setTimeout(() => {
        setBtnActive(false);
      }, 500);
    } else {
      alert(`Product has been already added to the cart!
(If you want to buy more pieces go to the Cart tab)`);
    }
  };

  const subtraction = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.count === 1 ? (item.count = 1) : (item.count -= 1);
      }
    });
    setCart([...cart]);
  };
  const addition = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.count += 1;
      }
    });
    setCart([...cart]);
  };

  const deleteProduct = (id) => {
    if (window.confirm("Do you want to delete this product?")) {
      cart.forEach((item, index) => {
        if (item.id === id) {
          cart.splice(index, 1);
        }
      });
      setCart([...cart]);
    }
  };
  const deleteAllProducts = () => {
    if (window.confirm("Do you want to delete all products?")) {
      cart = [];
      setCart([...cart]);
    }
  };

  const deleteFeedback = () => {
    setList([]);
    console.log(list);
    setDisableBtn(false)
  };

  useEffect(() => {
    const dataCart = JSON.parse(localStorage.getItem("dataCart"));
    if (dataCart) setCart(dataCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("dataCart", JSON.stringify(cart));
  }, [cart]);

  return (
    <DataContext.Provider
      value={{
        products,
        addCart,
        btnActive,
        list,
        setList,
        deleteFeedback,
        disableBtn,
        setDisableBtn,
        cart,
        setCart,
        addition,
        total,
        setTotal,
        subtraction,
        deleteProduct,
        deleteAllProducts,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
