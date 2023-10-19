import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { Box, Chip } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


export function NewsCard({ urlToImage, title, publishedDate, category, id }) {
    return (
        <Card sx={{ maxWidth: 345,minHeight:380, borderRadius: 6 }} id={id}>

            <CardMedia
                component="img"
                height="190"
                image={urlToImage??`${process.env.PUBLIC_URL}/logo.svg`}
                alt={title ?? 'News title'}
            />
            <CardContent>
                <Typography variant="body1" sx={{
                   overflow: 'hidden',
                   textOverflow: 'ellipsis',
                   display: '-webkit-box',
                   WebkitLineClamp: '2',
                   WebkitBoxOrient: 'vertical',
                }} fontWeight={'600'} color={'primary.main'} textAlign={'start'} >
                    {title}
                </Typography>
                <Box display={'flex'} alignItems={'center'} py={'0.5rem'}>
                    <Box component={CalendarMonthIcon} sx={{ paddingRight: '0.75rem', color: '#13beff' }} />
                    <Typography variant="body2" >
                        {formatDate(publishedDate)}
                    </Typography>
                </Box>
            </CardContent>
            <CardActions disableSpacing sx={{ justifyContent: 'space-between' }} >
                <Chip sx={{ bgcolor: "rgba(116,116,116,0.2)", color: '#5e6282', height: '1rem' }} label={category} />
                <Box>

                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon sx={{ color: '#13beff' }} />
                    </IconButton>
                    <IconButton aria-label="share" >
                        <ShareIcon sx={{ color: '#13beff' }} />
                    </IconButton>
                </Box>
            </CardActions>
        </Card>
    );
}


const formatDate = (stringDate) => {
    const date = new Date(stringDate)
    return date.toLocaleString("en", { weekday: "short", day: "2-digit", month: "short", year: "numeric" });


}