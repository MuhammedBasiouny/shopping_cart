import React from 'react';
import '../../css/Filter/Filter.css';

function Filter({ handleFilterBySize, size, sort, handleFilterByOrder, productNumber }) {
  return (
    <div className="filter-wrapper">
      <h2 className="filter-title"> Filter </h2>
      <div className="num-of-producst"> Number of Products {productNumber}</div>
      <div className="filter-by-size">
        <span>Filter</span>
        <select value={size} className="filter-select" onChange={handleFilterBySize}>
          <option value="ALL">ALL</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
      </div>
      <div className="filter-by-size">
        <span>Order</span>
        <select value={sort} className="filter-select" onChange={handleFilterByOrder}>
          <option value="latest">Latest</option>
          <option value="lowest">Lowest</option>
          <option value="highest">Highest</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;
