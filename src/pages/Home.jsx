import React, { useEffect } from 'react'
import axios from 'axios'
import qs from 'qs'
import { useNavigate } from 'react-router-dom'

import Categories from '../components/Categories'
import { PizzaBlock, Skeleton } from '../components/PizzaBlock'
import Sort, { sortList } from '../components/Sort'
// import { SearchContext } from '../App'
import Pagination from '../components/Pagination'
import { useSelector, useDispatch } from 'react-redux'
import {
    setCategoryId,
    setCurrentPage,
    setFilters,
} from '../redux/slices/filterSlice'
import { logDOM } from '@testing-library/react'

const Home = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const isSearch = React.useRef(false)
    const isMounted = React.useRef(false)

    const { categoryId, sortProperty, searchStateValue, currentPage } =
        useSelector((state) => state.filter)

    const [item, setItem] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)
    // const [categoryId, setCategory] = React.useState(0)
    // const [currentPage, setCurrentPage] = React.useState(1)
    // const [SortType, setSortType] = React.useState({
    //     name: 'популярности',
    //     sort: 'rating',
    // })

    const onClickCategories = (id) => {
        dispatch(setCategoryId(id))
    }
    const onChangePage = (number) => {
        dispatch(setCurrentPage(number))
    }

    const fetchPizzas = () => {
        setIsLoading(true)
        /*
        fetch(
            `https://62b1cd4ec7e53744afc186f9.mockapi.io/item?page=${currentPage}&limit=4&${search}${category}&sortBy=${sort.sort}&order=desc`
        )
            .then((res) => res.json())
            .then((json) => {
                setItem(json)
                setIsLoading(false)
            })*/

        const category = categoryId > 0 ? `category=${categoryId}` : ''
        const search = searchStateValue ? `&search=${searchStateValue}` : ''

        axios
            .get(
                `https://62b1cd4ec7e53744afc186f9.mockapi.io/item?page=${currentPage}&limit=4&${search}${category}&sortBy=${sortProperty.sort}&order=desc`
            )
            .then((res) => {
                setItem(res.data)
                setIsLoading(false)
            })
    }

    // Изменения параметров в адресной строчке во второй рендер ( В первый рендер сделали isMounted.current = true)  при изменения параметров

    React.useEffect(() => {
        if (isMounted.current) {
            const querystring = qs.stringify({
                categoryId,
                currentPage,
                searchStateValue,
                sort: sortProperty.sort,
            })

            navigate(`?${querystring}`)
        }
        isMounted.current = true
    }, [categoryId, searchStateValue, currentPage, sortProperty])

    // Если был первый рендер,то проверяем URL-параметры и сохраняем в редуксе

    React.useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1))
            const sort = sortList.find((obj) => obj.sort === params.sort)

            dispatch(setFilters({ ...params, sortProperty: sort }))
            isSearch.current = true
        }
    }, [])

    // const { searchValue } = useContext(SearchContext)

    const pizzas = item.map((obj) => <PizzaBlock key={obj.id} {...obj} />)
    const Skeletons = [...new Array(4)].map((_, index) => (
        <Skeleton key={index} />
    ))

    //Если был первый рендер,то зарашиваем пиццы

    React.useEffect(() => {
        window.scrollTo(0, 0)

        if (!isSearch.current) {
            fetchPizzas()
        }

        isSearch.current = false
    }, [categoryId, sortProperty, searchStateValue, currentPage])

    return (
        <>
            <div className="content__top">
                <Categories
                    value={categoryId}
                    onClickCategories={onClickCategories}
                />
                <Sort />
                {/*value={SortType} onChangeSort={(i) => setSortType(i)}*/}
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading ? Skeletons : pizzas}
            </div>
            <Pagination value={currentPage} onChangePage={onChangePage} />
        </>
    )
}

export default Home
