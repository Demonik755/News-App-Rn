import {ADD_NEWS, FETCH_NEWS,  REMOVE_NEWS, } from "../types";

const handlers = {
    [ADD_NEWS]: (state, {title, description, id}) => ({
        ...state,
        news:[
            {id, title, description},
            ...state.news,
        ],

    }),
    [REMOVE_NEWS]: (state, {id}) => ({
        ...state,
        news: state.news.filter(news =>news.id !== id)
    }),

    [FETCH_NEWS]: (state, {news}) => ({...state, news}),
    DEFAULT: state => state
};

export const newsReducer = (state, action) => {
    const handler = handlers[action.type] || handlers[DEFAULT];
    return handler(state, action)
};