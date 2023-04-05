import React from 'react'
import '../App.css'
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { Link } from 'react-router-dom';
import useSWR from 'swr'
const Api = "https://image.tmdb.org/t/p/w500"
const fetcher = (...args) => fetch(...args).then(res => res.json())
function SingleMovie() {
  
const {id} = useParams();
const { data, error, isLoading } = useSWR(`https://api.themoviedb.org/3/movie/${id}?api_key=97b9bf43c44a400953364ec2a3d7f7ba`, fetcher)
console.log(data);
if (error) return <div>failed to load</div>
  
  if (isLoading) return 
  <div>
        <CircularProgress variant="determinate" />
  </div>
  return (
    <div className="Single">
      <div>
        <img src={Api+data.poster_path} alt="Matrix" />
      <h4>{data.title}</h4>
      <Link to={`/`}>
     <Button style={{backgroundColor:"#0b1120",color:"#e0e6ee"}} variant="outlined">Return To Home</Button>
      </Link>
      </div>
    </div>
  )
}

export default SingleMovie