import { Route, NavLink ,Routes } from "react-router-dom";

import HomePage from '../page/Home'
import Movies from '../page/Movies'
import MovieDetails from '../page/MovieDetails'

export const App = () => {
  return (
    <div>
  
<header className="header">
      <nav>
        <ul className="home_page">
          <li className="home_page_item"><NavLink className='page' to='/'>Home</NavLink></li>
          <li className="home_page_item"><NavLink className='page' to='/movies'>Movies</NavLink></li>
        </ul>
      </nav>
</header>

     <main>
  <Routes >
    
    <Route path="/" element={ <HomePage/>} />
    <Route path="/movies" element={ <Movies/>} />
    <Route path="/movies/:moviesId" element={ <MovieDetails/>} />
        

    <Route path="*" element={ <HomePage/>} />
    
  </Routes>
     </main>
     
      
      
      
    </div>
  );
};
