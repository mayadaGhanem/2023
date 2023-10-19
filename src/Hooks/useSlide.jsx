
import { useState } from 'react'
import {slides} from '../data/slides';

export  function useSlide() {
    const [currenOrder, setCurrenOrder] = useState(slides[0]);
    const [currentIndex, setCurrenIndex] = useState(0);
    const handleClickSlider = () => {
        const next=currentIndex+1
        setCurrenIndex((prevCount) => (prevCount + 1) % orders.length);
        setCurrenOrder(slides.find((_item)=>_item.order===next));

     }
 
    const orders=slides.map(({colorCode,id})=>({colorCode,id}));
     return (
    [
        orders,
        currenOrder,
        handleClickSlider,
    ]
  )
}
