import React, {useReducer} from 'react';
import {NewsContext, } from './newsContext';
import {newsReducer} from "./newsReducer";

export const NewsState = ({children}) => {
    const initialState = {
        news: [{id: "1", title: "jojoojo", description: "sfsfsfsff"}]
    };
    const [state, dispatch] = useReducer(newsReducer, initialState);
    return <NewsContext.Provider
        value={{
            news: state.news
        }}>
        {children}
    </NewsContext.Provider>
};