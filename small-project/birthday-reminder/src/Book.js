import React from "react";

const Book = ({ img, name, age }) => {
  return (
    <article className="book">
      <img src={img} alt=""></img>
      <h1>{name}</h1>
      <h4>{age}</h4>
    </article>
  );
};

export default Book;
