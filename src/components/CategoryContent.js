import React, { useState, useEffect } from 'react';
import { Route, Link, Redirect, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

const CategoryContent = (props) => {
  const [data, setData] = useState([]);
  console.log('hi', props.match.params);

  useEffect(() => {
    const { category } = props.match.params;
    let isActive = true;
    console.log('useeffect');
    fetch(
      `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${category}`
    )
      .then((response) => response.json())
      .then(
        (res) => {
          if (isActive) {
            // const arr = res.filter((i) => i.product_type === category);
            // console.log({ arr });
            // console.log({ category });
            console.log(res);
            setData(res);
            console.log(data);
            // console.log({ categoryContent });
            // setCategoryContent(r=>res);
            // console.log({ categoryContent });
          }
        },
        [category]
      );

    return () => {
      isActive = false;
    };
  });

  if (!data) {
    console.log('noooo');
    return <h1>loading</h1>;
  }

  return (
    <ul className="home-page-container">
      <div className="home-recipes-container">
        {data.map((item) => (
          <li className="item" key={item.id}>
            <div className="search-recipes-img-container">
              {/* <Link to={`/recipeDetails/${item.idMeal}`}> */}
              <img className="home-recipes-img" src={item.image_link} />
              <p>{item.brand}</p>
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{`${item.price} ${item.price_sign}`}</p>
{/* 
              <ul>
                {item.product_colors.map((i) => {
                  console.log("hex",i.hex_value),
                     <li key={i.hex_value}>
                       {i.i.colour_name}
                        <div className="colors">{i.colour_name}</div>
                      </li>
                    
                })}
              </ul> */}
              {/* </Link> */}
            </div>
          </li>
        ))}
      </div>
    </ul>
  );
};
CategoryContent.PropTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ category: PropTypes.string.isRequired }),
  }),
};

export default CategoryContent;
