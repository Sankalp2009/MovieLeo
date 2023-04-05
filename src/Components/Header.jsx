import React from 'react'
import Input from '@mui/joy/Input';
import Button from '@mui/material/Button';
import "../App.css"
import { useState } from 'react';
function Header({handleQuery,Data,HandleSort}){

 const [input, setInput] = useState("")
  
 const HandleClick = ()=>{
  handleQuery(input);
  setInput("");
 }

  const HandleChange=(sortdata)=>{
     if(sortdata === 'lth')
      {
       let Low = Data.sort((a,b)=>{
      return a.vote_average - b.vote_average
    })
    HandleSort(Low);
      }
      else if(sortdata === 'htl')
      {
       let High = Data.sort((a,b)=>{
          return b.vote_average - a.vote_average
        }) 
        HandleSort(High);
      }
  }


 const handleChange=(datasort)=>{
    if(datasort ==="")
    {
      window.location.reload()
    }
 }

  return (
    <div className="Head">
      <section>
        <h2>Moviemania</h2>
      </section>
      <section className="inner_btn">
      <Button 
          variant="contained" 
          size="small"
          value=""
          onClick={(e)=>handleChange(e.target.value)}
          >All
          </Button>
        <Button 
          variant="contained" 
          size="small"
          value="htl"
          onClick={(e)=>HandleChange(e.target.value)}
          >Htl
          </Button>
          <Button 
          variant="contained" 
          size="small"
          value="lth"
          onClick={(e)=>HandleChange(e.target.value)}
          >LtH
          </Button>
      </section>
      <section className="inner_Head">
        <section>
          <Input 
          disabled={false} 
          size="sm" 
          placeholder="Enter Movie" 
          onChange={(e)=>setInput(e.target.value)}
          />
          </section>
        <section>
          <Button 
          variant="contained" 
          size="small"
          onClick={HandleClick}
          >Search</Button>
        </section>
      </section>
    </div>
  )
}

export default Header