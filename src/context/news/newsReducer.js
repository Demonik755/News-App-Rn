import {ADD_NEWS, FETCH_NEWS, HIDE_ERROR, HIDE_LOADER, REMOVE_NEWS, SHOW_ERROR, SHOW_LOADER} from "../types";

const handlers = {
    [ADD_NEWS]: (state, {title, description, id}) => ({
        ...state,
        news:[
            ...state.news,
            {id, title, description},
        ]
    }),
    [REMOVE_NEWS]: (state, {id}) => ({
        ...state,
        news: state.news.filter(news =>news.id !== id)
    }),
    [SHOW_LOADER]: state => ({...state, loading: true}),
    [HIDE_LOADER]: state => ({...state, loading: false}),

    [HIDE_ERROR]: state => ({...state, error: null}),
    [SHOW_ERROR]: (state, {error}) => ({...state, error: error}),

    [FETCH_NEWS]: (state, {news}) => ({...state, news}),
    DEFAULT: state => state
};

export const newsReducer = (state, action) => {
    const handler = handlers[action.type] || handlers[DEFAULT];
    return handler(state, action)
};