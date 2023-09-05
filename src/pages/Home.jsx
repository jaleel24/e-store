import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { fetcher } from "../fetcher";
const Home = () => {
  const [categories, setCategories] = useState({ errorMessage: "", data: [] });
  useEffect(() => {
    const fetchData = async () => {
      const responseObject = await fetcher("/categories");
     
      setCategories(responseObject);
    };
    fetchData();
  }, []); // dont forget the dependency otherwise it will go into the infinite loop and your server will go bongus

  function renderCategories() {
    return categories.data.map((c) => (
      <li key={c.id} className="bg-slate-200 px-6 py-4 hover:bg-slate-100 rounded-sm">
        <NavLink to={`/categories/${c.id}`}>{c.title}</NavLink>
      </li>
    ));
  }

 
  return (
  
      <div className="w-44 grid">
        {categories.errMessage && (
          <div className="font-semibold">Error: {categories.errMessage}</div>
        )}
        <ul>{categories.data && renderCategories()}</ul>
       
      </div>
    
  );
};

export default Home;
