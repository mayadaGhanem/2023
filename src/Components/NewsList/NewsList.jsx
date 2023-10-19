import React from 'react'
import { Box, Button, Container } from '@mui/material'
import { NewsCard } from '../NewsCard/NewsCard'

export default function NewsList(props) {
    const { newsData,
        handleViewMore,
        hideViewMore, } = props;
    return (<Container>
        <Box textAlign={'center'}>
            <Box display={'flex'} flexWrap={'wrap'} justifyContent={'center'} gap={3} paddingBottom={2}>
                {newsData.map((_item) => <Box key={_item.id} flexBasis={{sx:'100%',md:'30%'}}>
                    <NewsCard {..._item} />
                </Box>)
                }
            </Box>
            {!hideViewMore && <Button onClick={() => handleViewMore()} sx={{ color: '#ffff', bgcolor: "#ff7c16", borderRadius: 2.5, paddingX: 2, paddingY: 1.5 }} variant='contained'>View All News</Button>}

        </Box>
    </Container>

    )
}
