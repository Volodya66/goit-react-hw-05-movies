import { Route, NavLink ,Routes,Navigate } from "react-router-dom";

import { lazy,Suspense} from "react";

// import HomePage from '../page/Home'
// import Movies from '../page/Movies'
// import MovieDetails from '../page/MovieDetails'

const HomePage  = lazy(() => import('../page/Home'));
const Movies  = lazy(() => import('../page/Movies'));
const MovieDetails = lazy(() => import('../page/MovieDetails'));
const Loader = lazy(() => import("./Loader"));


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
        <Suspense fallback={<Loader/>}>
 <Routes >
    
    <Route path="/" element={ <HomePage/>} />
    <Route path="/movies" element={ <Movies/>} />
    <Route path="/movies/:moviesId/*" element={ <MovieDetails/>} />


    <Route path="*" element={ <Navigate to='/'/>} />
    
  </Routes>
      </Suspense>
 
     </main>
    
    </div>
  );
};
