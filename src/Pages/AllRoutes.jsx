import React from 'react' 
import {Routes,Route} from 'react-router-dom'; 
import Home from './Home';
import Movie from './Movie'
import SingleMovie from './SingleMovie';
function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Movie" element={<Movie />} />
      <Route path="/Movie/:id" element={<SingleMovie />} />
    </Routes>
  )
}

export default AllRoutes