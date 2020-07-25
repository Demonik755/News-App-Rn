import React, {useReducer} from 'react';
import {NewsContext, } from './newsContext';
import {newsReducer} from "./newsReducer";
import {ADD_NEWS, REMOVE_NEWS} from "../types";

export const NewsState = ({children}) => {
    const initialState = {
        news: [{id: "1", title: "jojoojo", description: "sfsfsfsff"}]
    };
    const [state, dispatch] = useReducer(newsReducer, initialState);
    const addNews = (title, description) => dispatch({type: ADD_NEWS, title, description});
    const removeNews = id => dispatch({type: REMOVE_NEWS, id});
    return <NewsContext.Provider
        value={{
            news: state.news,
            addNews,
            removeNews
        }}>
        {children}
    </NewsContext.Provider>
};