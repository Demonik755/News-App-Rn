import React, {useReducer} from 'react';
import {NewsContext, } from './newsContext';
import {newsReducer} from "./newsReducer";
import {ADD_NEWS, FETCH_NEWS, HIDE_ERROR, HIDE_LOADER, REMOVE_NEWS, SHOW_ERROR, SHOW_LOADER} from "../types";

export const NewsState = ({children}) => {
    const initialState = {
        news: [],
        error: false,
        loading: false,
    };
    const [state, dispatch] = useReducer(newsReducer, initialState);
    const addNews = async (title, description) => {
        const response = await fetch("https://newsapp-rn.firebaseio.com/news.json", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({title, description})
        });
        const data = await response.json();
        console.log(data);
        dispatch({type: ADD_NEWS, title, description, id: data.name});
    }

    const removeNews = id => dispatch({type: REMOVE_NEWS, id});
    const showLoader = () => dispatch({type: SHOW_LOADER});
    const hideLoader = () => dispatch({type: HIDE_LOADER});
    const showError = (error) => dispatch({SHOW_ERROR, error});
    const hideError = (error) => dispatch({HIDE_ERROR});
    const fetchNews = (title, description) => dispatch({type: FETCH_NEWS, title, description});
    return <NewsContext.Provider
        value={{
            news: state.news,
            addNews,
            removeNews
        }}>
        {children}
    </NewsContext.Provider>
};