import { PlayArrow } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import React from 'react'
import {ReactComponent as Decore} from './decore.svg'

export function ContentBanner(props) {
    const { orders, currenOrder } = props;
    const { title, brief, category } = currenOrder;
    const activeColor = orders.find((_item) => _item.id === currenOrder.id).colorCode;
    return (
        <Box flex={1} gap={'2rem'} display={'flex'} flexDirection={'column'} sx={{ order: {xs:2,md:1},justifyContent:{xs:'center',md:'start'} }}>
            <TagLine color={activeColor} category={category} />
            <BackgroundWithOrderColor color={activeColor} >
            <Title title={title} />
            </BackgroundWithOrderColor>
            <DescriptionSection brief={brief} />
            <Box display={'flex'} left={0} justifyContent={'start'} paddingBottom={4} gap={'2rem'}>

                <FindOutButton />
                <PLayDemo />
            </Box>
            <Orders orders={orders} active={currenOrder} />

        </Box>)
}

const BackgroundWithOrderColor = ({ color,children }) => {
    return <Box position={'relative'}>

        {children}

     <Box component={Decore} zIndex={-1} color={`#${color}`} position={'absolute'}   top={'2.5rem'} right={0}/>
         </Box>

}


const TagLine = ({ category, color }) => {
    return <Typography paddingTop={'4rem '} color={`#${color}`} fontWeight={'bold'} >{category}</Typography>
}
const Title = ({ title }) => {
    return <Typography variant='h2' fontWeight={'bold'} zIndex={1} >{title}</Typography>
}

const DescriptionSection = ({ brief }) => {
    return <Typography sx={{paddingRight:'9rem'}}>{brief}</Typography>

}

const FindOutButton = () => {
    return <Button sx={{height:'3rem', color: '#ffff', bgcolor: "#ff7c16", borderRadius: 2.5, paddingX: 2, paddingY: 1.5 }} variant='contained'>Find out more</Button>
}

const Orders = ({ active, orders }) => {

    return <Box display={'flex'} alignItems={'center'} sx={{justifyContent:{xs:'center',md:'start'} }} >

        {orders.map((_item, index) => <React.Fragment key={_item.id}>
            <Box
                bgcolor={`#${_item.colorCode}`}
                sx={{

                    borderRadius: '50%', height: _item.id === active.id ? '2.5rem' : '2rem',
                    width: _item.id === active.id ? '2.5rem' : '2rem',

                }} />
            <Typography paddingX={1} display={orders.length - 1 === index ? 'none' : 'inline'}>. . . . . . .</Typography>
        </React.Fragment>
        )}
    </Box>
}


const PLayDemo = () => {
    return <Button
        variant='text'
        startIcon={<Box sx={{
            borderRadius: '50%', backgroundColor: '#E72228', height: '3rem',
            width: '3rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center'
        }} >
            <PlayArrow sx={{ color: "#fff" }} />
        </Box>} endIcon={<Typography>Play Demo</Typography>}></Button>

}


