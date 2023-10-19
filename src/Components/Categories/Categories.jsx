import { Box, Chip, Container } from '@mui/material';
import React from 'react'
import { Category } from '../Category/Category';

export function Categories(props) {
    const { categories, handleClickCategory, currentCategoryActive } = props;
    return (
        <Container>
            <Box py={4} justifyContent={'center'} display={'flex'} gap={{xs:1,md:3}}  sx={{ alignItems: 'center', flexDirection: { xs: 'column', md: 'row' } }}>
                <Chip
                    onClick={() => handleClickCategory(-1)} sx={{
                        cursor: 'pointer',
                        bgcolor: currentCategoryActive === -1 ? "#13beff !important" : "rgba(116,116,116,0.2)",
                        color: currentCategoryActive === -1 ? '#fff' : '#5e6282'
                    }} label={'All News'} />

                {
                    categories.map((_item) => <Category key={_item.id} handleClickCategory={handleClickCategory}{..._item} isActive={currentCategoryActive === _item.id} />)
                }
            </Box>
        </Container>
    )
}
