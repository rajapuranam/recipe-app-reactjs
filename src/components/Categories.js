import React, { useState } from "react";
import style from "../css modules/category.module.css";
import AllRecipies from "./AllRecipies";
import Category from "./Category";
import {Link} from 'react-router-dom';


function Categories() {
  const categories = [
    "Breakfast",
    "Brunch",
    "Lunch",
    "Dinner",
    "Snacks",
    "Soups",
    "Salads",
    "Sides",
    "Pizza",
    "Rice",
    "Noodles",
    "Pasta",
    "Pies",
    "Burgers",
    "Sausages",
    "Chicken",
    "Poultry",
    "Meat",
    "Seafood",
    "Vegetarian",
    "Desserts",
    "Baking",
    "Drinks",
  ];

  const APP_ID = process.env.REACT_APP_ID;
  const APP_KEY = process.env.REACT_APP_KEY;

  const [recipies, setrecipies] = useState([]);
  const [showcategory, setShowcategory] = useState(true);

  const clickCategory = async (name) => {
    let response = await fetch(
      `https://api.edamam.com/search?q=${name}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    let data = await response.json();
    console.log(showcategory);
    setShowcategory(!showcategory);
    setrecipies(data.hits);
    console.log(showcategory);
  };

  return (
    <div>
    
      <p className={style.heading}>The Taste of Home Recipe</p>
      <p className={style.tagline}>
        Serving safe food, it’s not an option, it’s an obligation...
      </p>
      <p className={style.divider}></p>

      <Link to='/'><p className={style.gotohome}>Go to Home</p></Link>
      <br style={{clear:"both"}} />

      {showcategory ? (
        <div className={style.grid}>
          {categories.map((category) => (
            <Category
              key={category}
              name={category}
              onClick={() => {
                clickCategory(category);
              }}
            />
          ))}
        </div>
      ) : (
        <AllRecipies recipies={recipies} />
      )}
    </div>
  );
}

export default Categories;
