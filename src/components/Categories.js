import React, { useState, useEffect, useContext } from 'react';
import { Route, Link, Redirect, Switch } from 'react-router-dom';
import categoriesArray from '../data';
import MakeupContext from '../context/MakeupContext';

const Categories = () => {
  const [category, setCategory] = useState('lipstick');
  const { categoryContent, setCategoryContent } = useState([]);
  const handleClick = (e) => {
    console.log(e.currentTarget.id);
    setCategory(i=>e.currentTarget.id);
    console.log(category);
  };
  // useEffect(() => {
  //   let isActive = true;
  //   console.log('useeffect');
  //   fetch(
  //     `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${category}`
  //   )
  //     .then((response) => response.json())
  //     .then((res) => {
  //       if (isActive) {
  //         const arr = res.filter((i) => i.product_type === category);
  //         console.log({ arr });
  //         console.log({ category });
  //         setCategoryContent(res);
  //         console.log({ categoryContent });
  //       }
  //     });

  //   return () => {
  //     isActive = false;
  //   };
  // }, [category]);

  return (
    <ul className="home-page-container">
      <div className="recipes-container">
        {categoriesArray.map((item) => (
          <li
            // role="button"
            className="item"
            key={item.idCategory}
            // id={item.strCategory}
            // onClick={handleClick}
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
