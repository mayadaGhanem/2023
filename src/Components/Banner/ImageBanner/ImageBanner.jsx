import { Box } from '@mui/material'
import React from 'react'

 
export function ImageBanner({image, altText="slider-image"}) {
    return (
      <Box flex={1} sx={{ order: {xs:1,md:2} }}>
         <Box component={'img'} src={image}  alt={altText} loading="lazy" className='z-10' width={1}/>
       </Box>
     )
  }
  