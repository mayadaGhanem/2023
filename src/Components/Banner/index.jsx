import { Box } from "@mui/material";
import {ContentBanner} from "./ContentBanner/ContentBanner";
import { ImageBanner } from "./ImageBanner/ImageBanner";

export function Banner({bannerContentImageProps,bannerContentProps}) { 
   return (
    <Box display={'flex'}  width={'100%'} sx={{ addingTop:4,alignItems: 'center', flexDirection: { xs: 'column', md: 'row' }}}>
      <ContentBanner {...bannerContentProps}/>
      <ImageBanner {...bannerContentImageProps}/>
    </Box>
  )
}
