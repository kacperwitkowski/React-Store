import { useState,useContext } from "react";
import { DataContext } from "../Context";
import "../scss/Payment.scss";
import Truck from "../svg/truck.svg";
import Packaging from "../svg/packaging.svg";
import Packages from "../svg/packages.svg";
import { Link } from "react-router-dom";
import NumberFormat from 'react-number-format';

const PersonalInfo = () => {
  const contextType = useContext(DataContext);

  const MAX_VAL = 1400000000000000;

  const withValueCap = (inputObj) => {
    const { value } = inputObj;
    if (value <= MAX_VAL) return inputObj;
  };

  const [toggle, setToggle] = useState(false);
  const handleSumbit = (e) => {
    setToggle(!toggle);
    e.preventDefault();
  };

const [disabled,setDisabled] = useState(true)

  const [state, setState] = useState({
    value: "",
  });
  const handleChange = (e) => {
    setState({ value: e.target.value });
  };
  const handleCartReset = () => {
      contextType.cart = [];
      contextType.setCart([...contextType.cart]);
  };

  const handleInputLength = e => {
if(e.target.value.length >= 3) {
  setDisabled(false)
}
  }

  return (
    <div className="personal">
      <div className={toggle ? "personal--none" : "personal--container"}>
        <form onSubmit={handleSumbit} className="personal--form">
          <h1>
            <i className="fas fa-shipping-fast"></i>
            Client Details
          </h1>
          <div className="personal--info">
            <div>
              <label htmlFor="name">First Name</label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={state.value}
                required
              />
            </div>
            <div>
              <label htmlFor="lastName">Last Name</label>
              <input type="text" name="lastName" required />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" required />
            </div>
            <div>
              <label htmlFor="phone">Phone</label>
              <input type="text" name="phone" required />
            </div>
          </div>

          <h1>
            <i className="fas fa-home"></i> Address Information
          </h1>

          <div className="personal--address">
            <div className="personal--address-street">
              <label htmlFor="street">Street</label>
              <input type="text" name="street" required />
            </div>
            <div className="personal--address-country">
              <label htmlFor="country">Country</label>
              <input type="text" name="country" required />
            </div>

            <div className="personal--address-state">
              <label htmlFor="state">State</label>
              <input type="text" name="state" required />
            </div>
            <div className="personal--address-zip">
              <label htmlFor="zip">Zip</label>
              <input type="text" name="zip" required />
            </div>
          </div>
          <h1>
            <i className="far fa-credit-card"></i> Payment Information{" "}
            <span className="personal--payment-span">
              (You can put whatever numbers you want)
            </span>
          </h1>
          <div className="personal--cc-num">
            <label>Credit Card No.</label>
            <NumberFormat format="#### #### #### ####" required />
          </div>
          <div className="personal--cc-info">
            <div>
              <label htmlFor="expire">Exp</label>
              <NumberFormat
                format="##/##"
                mask={["M", "M", "Y", "Y"]}
                required
              />
            </div>
            <div>
              <label htmlFor="ccv">CCV</label>
              <NumberFormat
                onChange={handleInputLength}
                isAllowed={withValueCap}
                required
              />
            </div>
          </div>

          <div className="personal--btn">
            <button disabled={disabled} onClick={handleCartReset} type="submit">
              Pay
            </button>
          </div>
        </form>
      </div>

      <div className="toggle-container">
        <div className={toggle ? "show" : "hide"}>
          <h3>Thank you for your order {state.value}!</h3>
          <p>
            Your order number is{" "}
            <strong>#{Math.floor(Math.random() * 1000) * 2134}</strong>. We have
            emailed your order confirmation, and will send you an update when
            your order has shipped.
          </p>
          <p>
            <strong>(Dont worry it's just a template)</strong>
          </p>
          <div className="svg-container">
            <img className="packages" src={Packaging} alt="" width="40" />
            <p>------</p>
            <img src={Truck} alt="" width="40" />
            <p>------</p>
            <img src={Packages} alt="" width="40" />
          </div>
          <Link to="/" className="btn fill">
            Back on Home Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
