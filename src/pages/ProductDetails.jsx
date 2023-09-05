import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetcher } from "../fetcher";
const ProductDetails = () => {
  const [product, setProduct] = useState({ errorMessage: "", data: {} });
  const params = useParams();

    const createMarkup = ()=>{
      return {__html: product.data?.description}
    }
  const getProductsById = (id) => {
    return fetcher("/products/" + id);
  };

  useEffect(() => {
    const fetchData = async () => {
      const ProductDetails = await getProductsById(params.id);
      // console.log("Product Details:", ProductDetails);
      setProduct(ProductDetails);
    };
    fetchData();
  }, [params.id]);

  return (
    <>
      <section>
        <div className="text-lg text-blue-950 font-bold  my-3 flex justify-center">
          {product.data.title}
        </div>
      </section>

      <div className="flex space-x-5 my-5 justify-center ">
        <figure>
          <div className="w-52 hover:animate-bounce">
            <img
              src={`../../public/assets/${product.data.image}`}
              alt={product.data.title}
            />
          </div>
        </figure>
        <aside>
          {/* <div>
                <h3 className='text-blue-950 font-bold'>Dimensions</h3>
                <label>{product.data.specs.dimensions}</label>
            </div> */}
          {/* {   product.data.specs.capacity &&
                <div>
                <h3>Capacity</h3>
                <label>{product.data.specs.capacity}</label>
            </div>} */}
          <div>
            <h3 className="text-blue-950 font-bold">Features</h3>
            <ul>
              {product.data.features?.map((f, i) => {
                return <li key={`features${i}`}>• {f}</li>;
              })}
            </ul>
          </div>
        </aside>
        <aside className="px-4 space-y-3">
          <p className="font-mono">&pound;{product.data.price}</p>
          <div className="bg-slate-100 mx-3 px-2 py-1 rounded-lg ">
            <div>
              <label className="font-bold ">
                Stock Level:{product.data.stock}
              </label>
            </div>
            <div>
              <label className="font-bold">FREE DELIVERY</label>
            </div>
          </div>

          <div>
            <button className="px-6 py-1 rounded-full bg-slate-300 hover:bg-slate-200 mx-2 sm:my-1 font-semibold ">
              Add to Basket
            </button>
          </div>
        </aside>
      </div>
    <div className="flex justify-center">
    <div className="w-1/2 px-10">
        <p className="font-italic" dangerouslySetInnerHTML={createMarkup()}></p>
      </div>
    </div>
    </>
  );
  //<div>Product Details {params.id} title: {product.data.title}</div>;
};

export default ProductDetails;
