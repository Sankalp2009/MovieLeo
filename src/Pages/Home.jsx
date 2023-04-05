import React from 'react'
import Button from '@mui/material/Button';
import useSWR from 'swr'
import Movie from './Movie';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Header from '../Components/Header';
import { useState } from 'react';
import '../App.css'
const fetcher = (...args) => fetch(...args).then(res => res.json())

function Home() {
    
    const [page, setPage] = useState(1)
  const [query, setQuery] = useState("")
  const [sort, setSort] = useState("")
  const handleQuery=(text)=>{
    setQuery(text);
  }
   
 const HandleSort = (sortData)=>{
  console.log(sortData);
  setSort([...sort,setSort]);
 }

  const { data, error, isLoading } = useSWR(query ? `https://api.themoviedb.org/3/search/movie?api_key=97b9bf43c44a400953364ec2a3d7f7ba&query=${query}`:`https://api.themoviedb.org/3/movie/popular?api_key=97b9bf43c44a400953364ec2a3d7f7ba&page=${page}`, fetcher)
  
  if (error) return <div>failed to load</div>
  
  if (isLoading) return <div>loading...</div>

  return (
    <div>
        <section>
        <Header handleQuery={handleQuery} HandleSort={HandleSort} Data={data?.results}/>
      </section>
      <section className="pagination">
      <Button disabled={page===1} style={{backgroundColor:"#0b1120",color:"#e0e6ee"}} variant="outlined" onClick={()=>setPage(page-1)}>prev</Button>
      <Button style={{backgroundColor:"#0b1120",color:"#e0e6ee"}} variant="outlined">{page}</Button>
      <Button style={{backgroundColor:"#0b1120",color:"#e0e6ee"}} variant="outlined" onClick={()=>setPage(page+1)}>next</Button>
     </section>
     <div className="inner_grid">
       {
      data && data?.results.map((item)=>
        <Movie key={item.id} {...item}  />
      )
     }
     </div>
     
    </div>
  )
}

export default Home