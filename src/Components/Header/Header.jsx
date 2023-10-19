import { Box, Container } from "@mui/material";
import { Navbar } from "../Navbar/Navbar";
import { Banner } from "../Banner";
export function HeaderComponent({ currentImgIndex, handleClickHeader, bannerSliderProps }) {

    return (
        <Box display={'flex'} flexDirection={'column'} onClick={handleClickHeader} width={'100%'}>
            <Box component={'img'} src={`${process.env.PUBLIC_URL}/decore${currentImgIndex}.svg`} className="bg-holder" />
            <Box zIndex={1}>

                <Navbar />
                <Container sx={{ paddingTop: 4 }}>
                    <Banner {...bannerSliderProps} />
                </Container>
            </Box>

        </Box>
    )
}
