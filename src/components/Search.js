import React, { useState, useEffect } from 'react';

const Search = () => {
  const [input, setInput] = useState('');
  const [data, setData] = useState([]);
  useEffect(() => {
      console.log("useeef")
    let isActive = true;
    fetch(
      `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${input}`
    )
      .then((response) => response.json())
      .then((res) => {
        if (isActive){ 
            console.log({res})
            setData(res);}
      });

    return () => {
      isActive = false;
    };
  }, [input]);

  return (
    <div>
      <input
        className="search-input"
        type="text"
        placeholder="Search for product"
        onChange={(e) => setInput(e.target.value)}
      />
      <ul className="home-page-container">
        <div className="home-recipes-container">
          {data.map((item) => (
            <li className="item" key={item.id}>
              <div className="search-recipes-img-container">
                {/* <Link to={`/productDetails/${data}`}> */}
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
      
    </div>
  );
};
export default Search;
