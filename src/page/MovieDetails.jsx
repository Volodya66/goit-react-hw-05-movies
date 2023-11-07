import { useParams } from "react-router-dom"
import axios from "axios";
import { useEffect, useState } from "react";

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
const {moviesId} = useParams();
console.log(moviesId);

useEffect(() => {
    
async function getMovieDetails(param){
    
try{  
const {data} =await axios.get(`https://api.themoviedb.org/3/movie/${param}?language=en-US`, options)
// console.log('data',data);
setDataHomePage(data)
}
catch (error) {
    console.error(error)
} };

getMovieDetails(moviesId)

    

},[moviesId])
    

return(
    <MovieDetailCard cardDetails={ dataDetailsCard} />
)

}
