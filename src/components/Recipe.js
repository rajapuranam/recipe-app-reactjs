import React from "react";
import style from "../css modules/recipe.module.css";
import {Link} from 'react-router-dom';

function Recipe(props) {
  const recipe = props.location.state;
  console.log(props.location.state);
  return (
    <div>
      <p className={style.heading}>The Taste of Home Recipe</p>
      <p className={style.tagline}>
        Serving safe food, it’s not an option, it’s an obligation...
      </p>
      <p className={style.divider}></p>
      <Link to='/'><p className={style.links}>Go to Home</p></Link>
      <Link to='/categories'><p className={style.links}>Show All Categories</p></Link>
      <br style={{clear:"both"}} />

      <div className={style.container}>
        <div className={style.details}>
          <img src={recipe.image} alt="" className={style.image} />
          <div className={style.righttext}>
            <p className={style.label}>{recipe.label}</p>
            <p className={style.divider}></p>
            <p className={style.healthlabels}>
              {recipe.healthLabels.join("\xa0")}
            </p>
            <div className={style.nutrients}>
              <p>
                <span>Calories: </span>
                <span>{parseInt(recipe.calories).toFixed(2)}</span>
              </p>
              <p>
                <span>Fat: </span>
                <span>
                  {parseInt(recipe.totalNutrients.FAT.quantity).toFixed(2)}
                </span>
              </p>
              <p>
                <span>Carbs: </span>
                <span>
                  {parseInt(recipe.totalNutrients.CHOCDF.quantity).toFixed(2)}
                </span>
              </p>
              <p>
                <span>Fiber: </span>
                <span>
                  {parseInt(recipe.totalNutrients.FIBTG.quantity).toFixed(2)}
                </span>
              </p>
              <p>
                <span>Protein: </span>
                <span>
                  {parseInt(recipe.totalNutrients.PROCNT.quantity).toFixed(2)}
                </span>
              </p>
              <p>
                <span>Cholesterol: </span>
                <span>
                  {parseInt(recipe.totalNutrients.CHOLE.quantity).toFixed(2)}
                </span>
              </p>
            </div>
          </div>
        </div>
        <p className={style.ingredients}>Ingredients:</p>
        <ul className={style.ingredientlines}>
          {recipe.ingredientLines.map((ing, index) => (
            <li key={index}>{ing}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Recipe;
