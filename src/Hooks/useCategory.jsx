import { useState } from 'react'
import {categories} from '../data/categories';

export  function useCategory() {
    const [currentCategoryActive, setCurrentCategoryActive] = useState({id:-1});

    const handleClickCategory = (categoryId) => {
console.log('first',categoryId)
        setCurrentCategoryActive(categoryId===-1?{id:-1}:categories.find((_item)=>_item.id===categoryId));
    }
  
    return (
    [
        categories,
        handleClickCategory,
        currentCategoryActive,
    ]
  )
}
