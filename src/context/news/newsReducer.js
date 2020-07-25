import {ADD_NEWS, REMOVE_NEWS} from "../types";

const handlers = {
    [ADD_NEWS]: (state, {title, description}) => ({
        ...state,
        news:[
            ...state.news,
            {
                id: Date.now().toString(),
                 title,
                 description
            },
        ]
    }),
    [REMOVE_NEWS]: (state, {id}) => ({
        ...state,
        news: state.news.filter(news =>news.id !== id)
    }),
    DEFAULT: state => state
};

export const newsReducer = (state, action) => {
    const handler = handlers[action.type] || handlers[DEFAULT];
    return handler(state, action)
};