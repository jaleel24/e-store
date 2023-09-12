import React, { useEffect } from 'react'
import { useState } from 'react';
import CProducts from '../components/CProducts';
import { useSearchParams } from 'react-router-dom';
import {fetcher}  from '../fetcher';
const SearchResults = () => {
    const [products, setProduct] = useState({ errorMessage: "", data: [] });

    //we are going to search through URL thats why using useSearchparams
    const[searchParams] = useSearchParams();
    const query = searchParams.get('s')
  useEffect(()=>{
    const fetchData = async ()=>{
        const response = await fetcher('/products?q='+ query);
        setProduct(response);
    }
    fetchData();
  },[query])
 
  function renderProducts() {
    
    return<>
    {products.data.map((p) => (
      <CProducts key={p.id} {...p}>
        {p.title}
      </CProducts>
    ))}
    </>
    }
  return (
    <main className="mx-12 my-4">
        <h1 className="font-bold text-xl ">Products</h1>
        {products.errMessage && (
          <div className="font-semibold">Error: {products.errMessage}</div>
        )}
        {products.data && renderProducts()}
  </main>
  )
}

export default SearchResults