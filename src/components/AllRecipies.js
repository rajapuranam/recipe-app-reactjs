import React, {useEffect} from "react";
import style from "../css modules/recipiesList.module.css";
import { Link } from "react-router-dom";
import { BsBoxArrowUpRight } from "react-icons/bs";
// import ScrollToTop from "./ScrollToTop";

function AllRecipies({ recipies }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
    {/* <ScrollToTop/> */}
      <ol className={style.gradientlist}>
        {recipies.map((recipe) => (
          <li key={recipe.recipe.label} className={style.flexcontainer}>
            <div className={style.details}>
              <p>{recipe.recipe.label}</p>
              <p>{recipe.recipe.healthLabels.join("\xa0\xa0\xa0\xa0")}</p>
              <p className={style.readmore}>
                <Link
                className={style.readmoredata}
                  to={{
                    pathname: `/recipe/${recipe.recipe.label.replace(/ /g, "+")}`,
                    state: recipe.recipe,
                  }}
                >
                  Read more
                  <span className={style.iconstyle}>
                    <BsBoxArrowUpRight />
                  </span>
                </Link>
              </p>
            </div>
            <img src={recipe.recipe.image} alt="" />
          </li>
        ))}
      </ol>
    </div>
  );
}

export default AllRecipies;
