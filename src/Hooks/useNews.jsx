
import { useEffect, useState } from 'react'
import { news } from '../data/news';
import { categories } from '../data/categories';

export function useNews({ categoryId }) {
    const [state, setState] = useState({
        hideViewMore: false,
        currentPage: 1,
        newsData: []
    })


    const handleViewMore = () => {

        const filteredNews = news
            .reduce((prev, _item) => {
                if (_item.showOnHomepage === "yes") {
                    const category = categories.find((cat) => cat.id.toString() === _item.categoryID);
                    prev.push({ ..._item, category: category?.name });
                } return prev;

            }, []);
        if (filteredNews.length / 6 > state.currentPage || filteredNews.length / 6 === state.currentPage) {
            const newState = filteredNews.splice(((state.currentPage - 1) * 6),
                6 + ((state.currentPage - 1) * 6))
            setState(prev => ({
                ...state,
                currentPage: state.currentPage + 1,
                newsData: state.currentPage === 1 ? newState : [...prev.newsData, ...newState]

            })
            )


        } else {
            setState({
                ...state,
                hideViewMore: true
            })
        }
    }
    const filterNewsByCategory = () => {

        const newNews = news.reduce((prev, _item) => {
            if (_item.categoryID === categoryId.toString() && _item.showOnHomepage === "yes") {
                const category = categories.find((cat) => cat.id === categoryId);
                prev.push({ ..._item, category: category?.name });
            } return prev;

        }, []);
        setState({
            hideViewMore: false,
            currentPage: 1,
            newsData: newNews
        })
    }

    useEffect(() => {
        if (categoryId !== -1) {
            filterNewsByCategory()
        } else {
            handleViewMore()

        }


    }, [categoryId])



    return (
        [
            state.newsData,
            handleViewMore,
            state.hideViewMore,
        ]
    )
}
