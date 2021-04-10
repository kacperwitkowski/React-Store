import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../Context";
import "../scss/Products.scss";

const Products = () => {
  const contextType = useContext(DataContext);
const { btnActive, products, addCart } = contextType;
  
  const [text] = useState("Product has been added to cart");
  

  return (
    <div>
      <div className={btnActive ? "popup-on" : "popup-off"}>
        {text}
      </div>
      <div className="product">
        {products.items.map((product) => (
          <div className="product--card" key={product.id * 1231}>
            <Link to={`/product/${product.id}`}>
              <img src={product.src} alt="product" />
            </Link>

            <div className="product--card-content">
              <div className="product--card-title">
                <h3>
                  <Link to={`/product/${product.id}`}>{product.title}</Link>
                </h3>
                <span>{product.price}$</span>
              </div>
              <p>{product.category}</p>

              <button className="btn--dark" onClick={() => addCart(product.id)}>
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
