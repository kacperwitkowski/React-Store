import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../Context";
import "../scss/Details.scss";
import "../scss/Cart.scss";
import "../scss/Button.scss";
import Button from "./Button";

const Cart = () => {
  const contextType = useContext(DataContext);
  const shoppingCart = contextType.cart;
  const { total, setTotal } = contextType;

  useEffect(() => {
    const getTotal = () => {
      const res = shoppingCart.reduce((prev, item) => {
        return prev + item.price * item.count;
      }, 0);
      setTotal(res);
    };
    getTotal();
  }, [shoppingCart]);

  if (shoppingCart.length === 0)
    return (
      <h2 style={{ textAlign: "center", fontSize: "5rem" }}>
        Your cart is empty
      </h2>
    );

  return (
    <div className="cart">
      <div className="cart--delete-all-btn">
        <button onClick={contextType.deleteAllProducts}>
          <i className="far fa-trash-alt"></i>Delete All
        </button>
      </div>
      {shoppingCart.map((item) => (
        <div className="details cart--details" key={item.id}>
          <div
            className="img-container"
            style={{
              backgroundImage: `url(${item.src})`,
            }}
          ></div>
          <div className="box">
            <div className="row">
              <h2>{item.title}</h2>
              <span>{item.price}$</span>
            </div>

            <div className="colors">
              <p>
                {item.colors.map((color, index) => (
                  <button key={index} style={{ background: color }}></button>
                ))}
              </p>
            </div>
            <p>Choose size</p>
            <div className="sizes">
              <select className="sizes-select" required>
                <option value="40">40</option>
                <option value="41">41</option>
                <option value="42">42</option>
                <option value="43">43</option>
                <option value="44">44</option>
                <option value="45">45</option>
              </select>
            </div>

            <p>{item.category}</p>
            <p>{item.content}</p>
            <div className="cart--amount">
              <div className="cart--amount-buttons">
                <button
                  className="count"
                  onClick={() => contextType.subtraction(item.id)}
                >
                  -
                </button>
                <span>{item.count}</span>
                <button
                  className="count"
                  onClick={() => contextType.addition(item.id)}
                >
                  +
                </button>
              </div>
              <div
                className="delete"
                onClick={() => contextType.deleteProduct(item.id)}
              >
                <i className="far fa-trash-alt"></i>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="cart--summary">
        <div className="cart--summary-box">
          <Link to="/payment" type="sumbit" className="button-pay">
            <Button />
          </Link>
          <h3>Total: {total.toFixed(2)}$</h3>
        </div>
      </div>
    </div>
  );
};

export default Cart;
