import { HeaderComponent } from "../Components/Header/Header";
import { useSlide } from "../Hooks/useSlide";
import { useNews } from "../Hooks/useNews";
import NewsList from "../Components/NewsList/NewsList";
import { Categories } from "../Components/Categories/Categories";
import { useCategory } from "../Hooks/useCategory";
import { Typography } from "@mui/material";
import { Footer } from "../Components/Footer/Footer";

export function HomeController() {
     const [orders, currenOrder, handleClickHeader] = useSlide();
     const [ categories,
         handleClickCategory,
         currentCategoryActive]=useCategory();
    const [newsData,
        handleViewMore,
        hideViewMore,] = useNews({categoryId:currentCategoryActive.id})
    const headerProps = {
        handleClickHeader,
        bannerSliderProps: {
            bannerContentProps: { orders, currenOrder },
            bannerContentImageProps: { altText: currenOrder.title, image: currenOrder.imgUrl }
        },
        currentImgIndex: currenOrder.order
    }; 
    return (
        <div>
            <HeaderComponent {...headerProps} />
            <Typography variant={'body2'}  textAlign={'center'} color={'#5e6282'}>Media</Typography>
            <Typography variant={'h4'} sx={{color:'#14183e',fontWeight:'bold',py:1}} textAlign={'center'}>Top News</Typography>
            <Categories categories={categories} currentCategoryActive={currentCategoryActive.id} handleClickCategory={handleClickCategory}/>
            <NewsList 
            newsData={newsData}
            handleViewMore={handleViewMore}
            hideViewMore={hideViewMore}

        />
            <Footer/>
        </div>
    )
}
