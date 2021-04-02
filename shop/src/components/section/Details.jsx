import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../Context";
import DetailsImgs from "./DetailsImgs";
import "../scss/Details.scss";

const Products = (props) => {
  const contextType = useContext(DataContext);
  const imgArea = useRef();

  const [index, setIndex] = useState(0);
  
  const prod = [];

  const getProduct = () => {
    if (props.match.params.id) {
      const res = contextType.products.products;
      const data = res.filter((prod) => {
        return prod.id === props.match.params.id;
      });
      prod.push(...data);
      // setProd({ prod: data });
    }
  };

  getProduct();


  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    imgArea.current.style.backgroundPosition = `${x}% ${y}%`;
  };

  return (
    <>
      {prod.map((item) => (
        <div className="details" key={item.id}>
          <div
            className="img-container"
            onMouseMove={handleMouseMove}
            style={{
              backgroundImage: `url(${item.images[index]})`,
            }}
            ref={imgArea}
            onMouseLeave={() =>
              (imgArea.current.style.backgroundPosition = `center`)
            }
          />

          <div className="details--box">
            <div className="details--row">
              <h2>{item.title}</h2>
              <span>{item.price}$</span>
            </div>
            <div className="details--colors">
              <p>
                {item.colors.map((color, index) => (
                  <button key={index} style={{ background: color }}></button>
                ))}
              </p>
            </div>
            <p>{item.category}</p>
            <p>{item.content}</p>
            <DetailsImgs images={item.images} setIndex={setIndex} />
            <div className="cartDiv">
              <Link
                to="/cart"
                type="sumbit"
                className="cart"
                onClick={() => contextType.addCart(item.id)}
              >
                Add to cart
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Products;
