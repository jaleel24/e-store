import React from "react";
import { useParams } from "react-router-dom";
import { useState ,useEffect} from "react";
import {fetcher} from '../fetcher';
import CProducts from "./CProducts";
const Category = () => {
  
  const [products, setProduct] = useState({ errorMessage: "", data: [] });
  const params = useParams();
  const getCategoriesById = (id) => {
    
    return fetcher("/products?catId=" + id);
  };
 
  useEffect(() => {
    const fetchData = async () => {
      const CategoryDetails = await getCategoriesById(params.catId);
      setProduct(CategoryDetails);
    };
    fetchData();
  }, [params.catId]);

  
  
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
   <>
    <main className="mx-12 my-4">
        <h1 className="font-bold text-xl ">Products</h1>
        {products.errMessage && (
          <div className="font-semibold">Error: {products.errMessage}</div>
        )}
        {products.data && renderProducts()}
  </main>
  </>
  );
}


export default Category;
