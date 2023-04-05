import React from 'react'
import "../App.css"
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
const Api = "https://image.tmdb.org/t/p/w500"
function Movie({id,title,poster_path,vote_average})
{
  return (
    <div className="Movie_Outer">
      <img src={Api+poster_path} alt="Matrix" />
      <h4>{title}</h4>
      <section style={{display:"flex",justifyContent:"space-between", padding:"10px"}} >
     <Link to={`/Movie/${id}`}>
     <Button style={{backgroundColor:"#0b1120",color:"#e0e6ee"}} variant="outlined">View Me</Button>
     </Link>
      <Button style={{backgroundColor:"#0b1120", color:"#e0e6ee"}} variant="outlined">{vote_average}</Button>
      </section>
    </div>
  )
}

export default Movie