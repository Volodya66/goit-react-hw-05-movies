import { useState, useEffect } from "react";
import axios from 'axios';


import Loader from "components/Loader";

import HomePageLists from '../components/HomePageLists/HomePageLists'

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMmIwMzFhYWNmYjFkYWIyMGEzMzNiZDE0NGU0Njg3OCIsInN1YiI6IjY1NDk0YzBmMWFjMjkyN2IyYzgxNmMxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CY3OvlYHRknA-27ebTHqrTp-OgJhbuj4a41Q0rqqOg0'
  }
};


export default function HomePage() {
  const [dataHomePage, setDataHomePage] = useState(null);
  const [loader, setLoader] = useState(null);

  // const location = useLocation();
  // console.log('location: ', location);


useEffect(() => {

async function getDataAPI(){
try {
  setLoader(true)
  const {data} = await axios.get('https://api.themoviedb.org/3/trending/all/day?language=en-US',options)
  // console.log(data);
  setDataHomePage(data);
  // setLoader(null)
// console.log('data',data)
}
catch (error) {
console.error(error);
}finally{setLoader(null)}
};
    
 getDataAPI()

}, []);
    
    
    
return(
  <div>
 

{loader && (<Loader/>)}
    {dataHomePage && (
        <HomePageLists dataList={dataHomePage.results}/>  
    )}
      
  
  
  </div>
  


)

}
