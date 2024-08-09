'use client'

import SearchBar from "./search-bar";
import { useState } from 'react';
import ProductListContainer from "./product-list-container";

export default function ProductList({ products }) {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);

    return (
      <div className="container mx-auto max-w-sm">
        <SearchBar
            filterText={filterText} 
            inStockOnly={inStockOnly}
            onFilterTextChange={setFilterText}
            onInStockOnlyChange={setInStockOnly}
         />
        <ProductListContainer 
            products={products}
            filterText={filterText}
            inStockOnly={inStockOnly}
        />
      </div>
    );
}
  