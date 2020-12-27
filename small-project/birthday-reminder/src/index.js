import React from "react";
import ReactDOM from "react-dom";

//css
import "./index.css";

//js files
import { persons } from "./persons";
import Book from "./Book";

function PersonBirthday() {
  const [people, setPeople] = React.useState(persons);
  let today = new Date();

  let date =
    parseInt(today.getMonth() + 1) +
    "-" +
    today.getDate() +
    "-" +
    today.getFullYear();

  console.log(date);

  return (
    <>
      <div className="container">
        <h2>Today's {date} Birthday Reminder</h2>
        {people.map((person) => {
          const { id, name, img, age } = person;
          return (
            <div className="maindiv">
              <div key={id} className="imagediv">
                <img src={img} alt=""></img>
              </div>
              <div className="namediv">
                <h3>{name}</h3>
                <h4>{age}</h4>
              </div>
            </div>
          );
        })}
        <button className="btn" onClick={() => setPeople([])}>
          Clear All Items
        </button>
      </div>
    </>
  );
}
ReactDOM.render(<PersonBirthday />, document.getElementById("root"));
