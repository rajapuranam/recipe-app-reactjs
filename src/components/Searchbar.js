import React, { useEffect, useState } from 'react';
import style from '../css modules/searchbar.module.css';
import AllRecipies from './AllRecipies';
import QuickCategory from './QuickCategory';
import {Link} from 'react-router-dom';

const Searchbar = () => {
    const APP_ID = process.env.REACT_APP_ID;
    const APP_KEY = process.env.REACT_APP_KEY;

    const [recipies, setrecipies] = useState([]);
    let [search, setSearch] = useState("");
    let [query, setQuery] = useState("");

    useEffect(() => {
      const getRecipies = async () => {
        let response = await fetch(
          `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
        );
        let data = await response.json();
        setrecipies(data.hits);
      };
      getRecipies();
    }, [query]);
  
    const updateSearch = (e) => {
      setSearch(e.target.value);
    };
  
    const updatequery = (e) => {
      e.preventDefault();
      setQuery(search);
    };

    return (
      <div>
        <p className={style.heading}>The Taste of Home Recipe</p>
        <p className={style.tagline}>Serving safe food, it’s not an option, it’s an obligation...</p>
        <div className={style.searchbar}>
            <form onSubmit={updatequery}>
                <label htmlFor="search">What are you looking for?</label>
                <input id="search" type="search" placeholder="What are you looking for..." autoFocus required value={search}
                onChange={updateSearch}/>
                <button type="submit">Search</button>
            </form>
        </div>
        <Link to='/categories'><p className={style.categories}>Show All Categories</p></Link>
        <br style={{clear:"both"}} />
        {
          search.length === 0
          ? <QuickCategory />
          : <AllRecipies recipies={recipies} />
        }
      </div>
    )
}

export default Searchbar
