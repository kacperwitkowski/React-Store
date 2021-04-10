import { useContext } from "react";
import { DataContext } from "../Context";
import Pin from "../svg/pin.svg";

const Todo = () => {
   const contextType = useContext(DataContext);
   const { disableBtn, list, deleteFeedback } = contextType;
  return (
    <div className="board--note">
      <img className="board--pin" src={Pin} alt="" />
      <div>
        <h4 className={disableBtn ? "board--hide-h4" : "board--show-h4"}>
          Feedback! Feedback! Feedback! Feedback! Feedback! Feedback! Feedback!
          Feedback! Feedback! Feedback! Feedback! Feedback! Feedback! Feedback!
          Feedback! Feedback! Feedback! Feedback! Feedback! Feedback! Feedback!
          Feedback! Feedback! Feedback! Feedback! Feedback! Feedback! Feedback!
          Feedback! Feedback! Feedback! Feedback!
        </h4>
      </div>
      {list.map((each) => (
        <div>
          <h5>{each.author}</h5>
          <p>{each.description}</p>
          <div className="board--delete-review" onClick={deleteFeedback}>
            <i className="far fa-trash-alt"></i>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todo;


