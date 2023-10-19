import { Chip } from '@mui/material'
import React from 'react'

export  function Category({id,name, isActive,handleClickCategory}) {
   return (
    <Chip 
     onClick={()=>handleClickCategory(id)}
     sx={{cursor:'pointer',
    
    bgcolor:isActive?"#13beff !important":"rgba(116,116,116,0.2)",
  
    color:isActive?'#fff':'#5e6282'}} label={name}/>

  )
}
