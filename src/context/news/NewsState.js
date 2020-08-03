import React, {useReducer,} from 'react';
import {NewsContext, } from './newsContext';
import {newsReducer} from "./newsReducer";
import {Http} from "../../http";
import {ADD_NEWS, FETCH_NEWS, REMOVE_NEWS, } from "../types";

export const NewsState = ({children}) => {
    const initialState = {
        news: [],
    };

    const [state, dispatch] = useReducer(newsReducer, initialState);
    const addNews = async (title, description) => {
            const data = await Http.post("https://newsapp-rn.firebaseio.com/news.json", {title, description});
            dispatch({type: ADD_NEWS, title, description, id: data.name});
    };

    const removeNews = async id => {
            await Http.delete(`https://newsapp-rn.firebaseio.com/news/${id}.json`);
            dispatch({type: REMOVE_NEWS, id});
    };

         const fetchNews = async () => {
                 const data = await Http.get("https://newsapp-rn.firebaseio.com/news.json");
                 const news = Object.keys(data).map(key => ({...data[key], id: key}));
                 dispatch({type: FETCH_NEWS, news});
    };

    return <NewsContext.Provider
        value={{
            news: state.news,
            addNews,
            removeNews,
            fetchNews,
        }}>
        {children}
    </NewsContext.Provider>
};