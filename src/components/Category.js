import React from 'react';
import style from "../css modules/category.module.css";


function Category({ name, onClick }) {
    let imageurl;
    if (
      name === "Burgers" ||
      name === "Chicken" ||
      name === "Pies" ||
      name === "Salads" ||
      name === "Sausages"
    )
      imageurl = `/images/${name.toLowerCase()}.png`;
    else imageurl = `/images/${name.toLowerCase()}.jpg`;
  
    return (
      <div>
        <div className={style.category} onClick={onClick}>
          <img src={process.env.PUBLIC_URL + imageurl} alt={name} />
          <p>{name}</p>
        </div>
      </div>
    );
  }

export default Category
