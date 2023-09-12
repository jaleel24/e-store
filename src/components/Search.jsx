import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Search = (props) => {
    const[searchTerms, setSearchTerms] = useState('');
    const navigate = useNavigate();

    useEffect(()=>{
    const delay=  setTimeout(()=>{
        if(searchTerms){
        navigate('/search?s='+ searchTerms);
        
        }
      },500);
      return ()=> clearTimeout(delay);
      
    }, [searchTerms, navigate]);
    const SearchchangeHandler = (event)=>{
      
        setSearchTerms(event.target.value)
    }
  return (
    <div className='font-bold text-2xl space-x-3'>
        <label>Search</label>
        <input className='rounded-lg ' type='text' name='search' onChange={SearchchangeHandler}/>
    </div>
  )
}

export default Search