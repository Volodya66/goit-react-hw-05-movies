import { useParams } from "react-router-dom"
import axios from "axios";
import { useEffect, useState } from "react";

import Loader from "components/Loader";

import MovieDetailCard from '../components/MovieDetailCard/MovieDetailCard'

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMmIwMzFhYWNmYjFkYWIyMGEzMzNiZDE0NGU0Njg3OCIsInN1YiI6IjY1NDk0YzBmMWFjMjkyN2IyYzgxNmMxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CY3OvlYHRknA-27ebTHqrTp-OgJhbuj4a41Q0rqqOg0'
  }
};

export default function MovieDetails ()  {
const [dataDetailsCard,setDataHomePage] = useState();
const [loader, setLoader] = useState(null);
const {moviesId} = useParams();
// console.log(moviesId);

useEffect(() => {
    
async function getMovieDetails(param){
    
try{ 
  setLoader(true) 
const {data} =await axios.get(`https://api.themoviedb.org/3/movie/${param}?language=en-US`, options)
setDataHomePage(data);
}
catch (error) {
  console.error(error);
}finally{setLoader(null)} };

getMovieDetails(moviesId)

    

},[moviesId])
    

return(
  <>
   

    {loader && (<Loader/>)}
    <MovieDetailCard cardDetails={dataDetailsCard} />
  

    </>
)

}
