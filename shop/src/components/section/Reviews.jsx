import "../scss/Reviews.scss";
import { useState, useContext } from "react";
import Todo from "./Todo";
import { DataContext } from "../Context";
import Pin from '../svg/pin.svg';

const Feedback = () => {

   const contextType = useContext(DataContext);
const { setList, list, setDisableBtn, disableBtn } = contextType;

  const [author, setAuthor] = useState({
    value: "",
  });
  const [state, setState] = useState({
    description: "",
  });
  const readInput = (e) => {
    setState({ description: e.target.value });
  };
  const readAuthor = (e) => {
    setAuthor({ value: e.target.value });
  };

  const addFeedback = () => {
    setList([
      ...list,
      {
        description: state.description,
        author: author.value,
        id: Math.random() * 1234,
      },
    ]);
    setAuthor({value: ""});
    setState({description: ""});
    setDisableBtn(true)
  };


  return (
    <div className="board">
      <div className="board--content">
        <div className="board--note">
          <img className="board--pin" src={Pin} alt="" />
          <h5>Breyanna Johnson</h5>
          <p>
            Mike is my top pick for online shoe stores because it provides an
            excellent all round service, while offering a good range of shoes at
            competitive prices. The website itself is easy to navigate, has
            excellent product photography, and offers loads of useful
            information on each product page.
          </p>
        </div>
        <div className="board--note">
          <img className="board--pin" src={Pin} alt="" />
          <h5>Matt Lowry</h5>
          <p>
            This site is TOP NOTCH!! love it, simple and clean and the SUPPORT is
            10000% on point! responsive and FIXES any issues I've had! HIGHLY
            RECCOMENEDED
          </p>
        </div>
        <div className="board--note">
          <img className="board--pin" src={Pin} alt="" />
          <h5>Linsy Thomas</h5>
          <p>
            Perhaps one of the best online store experiences ever had. Very
            decent website, parcels arrive fast, free delivery for members,
            returns are so easy and refunded without fuss and they do have good
            sales and offers.
          </p>
        </div>
        <Todo />
      </div>
      <div className="board--addFeedback">
        <h5>Leave your review!</h5>
        <p>Name:</p>
        <input value={author.value} onChange={readAuthor} type="text" />
        <p>Text:</p>
        <textarea
          rows="6"
          cols="20"
          onChange={readInput}
          value={state.description}
          type="text"
        />
        <button
          className="btn--dark"
          disabled={disableBtn}
          onClick={addFeedback}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Feedback;
