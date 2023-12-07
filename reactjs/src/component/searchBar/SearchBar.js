import React from 'react';
import { useState } from "react";

const SearchBar = ({setResults}) => {
    const [input, setInput] = useState("");
    const fetchData = (value) => {
        fetch("http://localhost:3000/productList")
          .then((response) => response.json())
          .then((json) => {
            const results = json.filter((product) => {
              return (
                value &&
                product &&
                product.title &&
                product.title.toLowerCase().includes(value) &&
                product.price &&
                product.img
              );
            });
            setResults(results);
          });
      };
      const handleChange = (value) => {
        setInput(value);
        fetchData(value);
      };

    return (
        <div className="search">
            <input type="text" placeholder="Tìm tên thuốc, thực phẩm,..." 
             value={input}
             onChange={(e) => handleChange(e.target.value)}/>
            <i className="fa-solid fa-magnifying-glass" />
            
        </div>
    );
};

export default SearchBar;