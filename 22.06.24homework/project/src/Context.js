import React, { act } from "react";

export const ProductContext = React.createContext();

export const initialState = {
    products: [
        { id: 101, title: "Psychology", price: 40, photo: "https://m.media-amazon.com/images/I/81c6E2VdT3L._AC_UF1000,1000_QL80_.jpg" },
        { id: 102, title: "Sociology", price: 50, photo: "https://images.booksense.com/images/568/458/9781465458568.jpg" },
        { id: 103, title: "Anthropology", price: 30, photo: "https://images.booksense.com/images/551/458/9781465458551.jpg" },
        { id: 104, title: "Economics", price: 70, photo: "https://static.yakaboo.ua/media/cloudflare/product/webp/352x340/9/7/9780241566237.jpg" },
    ],
    basket: [],
}

export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            const found = state.products.find(prod => prod.id === action.payload);
            const inBasket = state.basket.find(item => item.id === action.payload);
            return {
                ...state,
                basket: inBasket ? state.basket.map(item =>
                    item.id === action.payload ? { ...item, count: item.count + 1 } : item
                ) : [...state.basket, { ...found, count: 1 }]
            };
        case "COUNT_UP":
            return {
                ...state,
                basket: state.basket.map(item =>
                    item.id === action.payload ? { ...item, count: item.count + 1 } : item
                )
            };
        case "COUNT_DOWN":
            return {
                ...state,
                basket: state.basket.map(item =>
                    item.id === action.payload && item.count > 1 ? { ...item, count: item.count - 1 } : item
                )
            };
        case "DELETE":
            return {
                ...state,
                basket: state.basket.filter(x => x.id !== action.payload),
            };
        default:
            return state;
    }
}
``