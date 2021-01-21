import React, { useState, useEffect, useContext } from 'react';
import { Route, Link, Redirect, Switch } from 'react-router-dom';
import categoriesArray from '../data';


const Categories = () => {
  const [category, setCategory] = useState('lipstick');
  const { categoryContent, setCategoryContent } = useState([]);
  const handleClick = (e) => {
    console.log(e.currentTarget.id);
    setCategory(i=>e.currentTarget.id);
    console.log(category);
  };

  return (
    <ul className="home-page-container">
      <div className="recipes-container">
        {categoriesArray.map((item) => (
          <li
          
            className="item"
            key={item.idCategory}
            
          >
            <Link to={`/CategoryContent/${item.strCategory}`}>
              <div className="home-recipes-img-container">
                <img className="home-recipes-img" src={item.strCategoryThumb} />
                <p>{item.strCategory}</p>
              </div>
            </Link>
          </li>
        ))}
      </div>
    </ul>
  );
};

export default Categories;
