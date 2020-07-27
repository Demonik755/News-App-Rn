import React, {useReducer,} from 'react';
import {NewsContext, } from './newsContext';
import {newsReducer} from "./newsReducer";
import {Http} from "../../http";
import {ADD_NEWS, FETCH_NEWS, HIDE_ERROR, HIDE_LOADER, REMOVE_NEWS, SHOW_ERROR, SHOW_LOADER} from "../types";

export const NewsState = ({children}) => {
    const initialState = {
        news: [],
        error: false,
        loading: false,
    };
    const [state, dispatch] = useReducer(newsReducer, initialState);
    const addNews = async (title, description) => {
        try {
            const data = await Http.post("https://newsapp-rn.firebaseio.com/news.json", {title, description});
            dispatch({type: ADD_NEWS, title, description, id: data.name});
        }catch (e) {
            showError("ERROR");
            console.log(e)
        }
    };

    const removeNews = async id => {
        try {
            await Http.delete(`https://newsapp-rn.firebaseio.com/news/${id}.json`);
            dispatch({type: REMOVE_NEWS, id});
        }catch (e) {
            showError("ERROR");
            console.log(e)
        }
    };

         const fetchNews = async () => {
            showLoader();
            hideError();
            try {
                const data = await Http.get("https://newsapp-rn.firebaseio.com/news.json");
                const news = Object.keys(data).map(key => ({...data[key], id: key}));
                dispatch({type: FETCH_NEWS, news});
            }catch (e) {
                showError("ERROR");
                console.log(e)
            }finally {
                hideLoader()
            }
    };


    const showLoader = () => dispatch({type: SHOW_LOADER});
    const hideLoader = () => dispatch({type: HIDE_LOADER});
    const showError = (error) => dispatch({SHOW_ERROR, error});
    const hideError = (error) => dispatch({HIDE_ERROR, error});

    return <NewsContext.Provider
        value={{
            news: state.news,
            error: state.error,
            loading: state.loading,
            addNews,
            removeNews,
            fetchNews,
        }}>
        {children}
    </NewsContext.Provider>
};