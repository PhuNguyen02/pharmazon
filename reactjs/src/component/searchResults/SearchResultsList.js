import React from 'react';
import "./searchResults.css"

const SearchResultsList = ({ results }) => {
    return (
        <div className="results-list">
            {results?.map(item => (
                <div className="result-container" >
                    <div className='search-result'>
                        <img src={item.img}></img>
                        <div className='result-content'>
                            <div className='title-result'>{item.title}</div>
                            <div className='price-result'>{item.price}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SearchResultsList;