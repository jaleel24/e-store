const BASE_URL = "http://localhost:5174";

export const fetcher = async (url) => {
 let responseObject = {errMessage : '', data : []};
try {
    const response = await fetch(BASE_URL + url);
    if(!response.ok){
        throw new Error(`HTTP Error ${response.status}`);
    }
    const resData = await response.json();
    responseObject.errMessage = '';
    responseObject.data = resData;
    
    return responseObject;
} catch (err) {
    
    responseObject.errMessage = err.message;//need to understand this line
    
   
}

return responseObject;

};

// export const getCategories = ()=>{
//     fetcher('/categories');
// }


// export const getProducts = (id)=>{
//     fetcher('/products?catId='+id);
// }
