import React, { useState } from "react";
import style from "../css modules/quickcategory.module.css";
import Category from './Category';
import AllRecipies from "./AllRecipies";

function QuickCategory() {
  const categories = [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Snacks",
      "Noodles",
      "Chicken",
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
    )
}

export default QuickCategory
