import React from 'react';
import {useNavigate}  from 'react-router-dom';
import {Link}  from 'react-router-dom';
import { useContext } from 'react';
import {cartContext} from '../context/cartContext'
const CProducts = ({
    id,
    title,
    image,
    specs,
    features,
    price,
    stock}) => {
        //! initializing the context using the useContext hook
        const context = useContext(cartContext);
        //!just destructuring the addProduct method from the cartContext which we just assigned to the
        //! context
        const {addProduct} = context;
         const navigate = useNavigate();
  return (
    <>
    <section>
        <div className='text-lg text-blue-950 font-bold'>
            <Link to={`/products/${id}`}>{title}</Link>
            {/* {title} */}
            
        </div>
    </section>

    <div className='flex space-x-5 my-5'>
    
        <figure >
            <div className='w-52 hover:animate-bounce'>
                <img src={`/assets/${image}`} alt={title} />
            </div>
        </figure>
        <aside>
            <div>
                <h3 className='text-blue-950 font-bold'>Dimensions</h3>
                <label>{specs.dimensions}</label>
            </div>
            {   specs.capacity &&
                <div>
                <h3>Capacity</h3>
                <label>{specs.capacity}</label>
            </div>}
            <div>
                <h3 className='text-blue-950 font-bold'>Features</h3>
                <ul>
                    {features?.map((f, i) =>{
                    return <li key={`features${i}`}>• {f}</li>
                    })}
                </ul>
            </div>
        </aside>
        <aside className='px-4 space-y-3'>
                <p className='font-mono'>&pound;{price}</p>
                <div className='bg-slate-100 mx-3 px-2 py-1 rounded-lg '>
                   
                    <div>
                    <label className='font-bold '>Stock Level:{stock}</label>
                    </div>
                    <div>
                    <label className='font-bold'>FREE DELIVERY</label>
                    </div>
                </div>
                <div>
                    <button  className='px-6 py-1 rounded-full bg-slate-300 hover:bg-slate-200 mx-2 sm:my-1  font-semibold  ' onClick={()=>navigate(`/products/${id}`)} >View Product</button>
                
                </div>
                <div>
                <button className='px-6 py-1 rounded-full bg-slate-300 hover:bg-slate-200 mx-2 sm:my-1 font-semibold ' onClick={()=>addProduct({id , title, price})}>Add to Basket</button>
                </div>
        </aside>
    </div>
   </>
  )
}

export default CProducts;