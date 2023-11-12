import { useState, useEffect, useRef } from "react"
import { useSearchParams } from "react-router-dom";  //? робота з рядком
import axios from "axios";

import Loader from "components/Loader";

import HomePageLists from '../components/HomePageLists/HomePageLists'

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMmIwMzFhYWNmYjFkYWIyMGEzMzNiZDE0NGU0Njg3OCIsInN1YiI6IjY1NDk0YzBmMWFjMjkyN2IyYzgxNmMxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CY3OvlYHRknA-27ebTHqrTp-OgJhbuj4a41Q0rqqOg0'
  }
};

export default function Movies ()  {
 
 const form = useRef();
//  const [searchParam , setSearchParam] = useState('');
 const [searchParamsURL, setSearchParamsURL] = useSearchParams();
 const [dataSearchPar, setDataSearchPar] = useState(null);
 const [loader, setLoader] = useState(null);
 const query = searchParamsURL.get("query");



    
 useEffect(()=>{
     if (!query) {return};
     

 async function getFilmData(){
    try {
  setLoader(true)      
  const {data} = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,options)
  setDataSearchPar(data.results);
    }
    catch (error) {
        console.log(error)
    }finally{ setLoader(null); }};

getFilmData()
     
 },[query])

const handleClick = (e) => {
    e.preventDefault();
    
    const forma = form.current;
    // console.log("forma", forma);
    const value = forma.elements.query.value.trim().toLowerCase();
    // setSearchParam(value);
    if (value){setSearchParamsURL({query:value});}
    forma.reset();
    };
   

    return (
    
    <div>
    
    <form onSubmit={handleClick} ref={form} action="">
        <label >
            <input required name="query"  type="text" />
        </label>
       
        <button type="submit">Search</button>
    </form>
    
    <div>
    {loader && (<Loader/>)}   
    {dataSearchPar && dataSearchPar.length > 1 && query && (<div>
        
           <HomePageLists dataList={dataSearchPar} />         

    </div>)}

    </div>

    </div>

)

}
