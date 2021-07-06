import { useReducer, createContext, useContext } from "react";
import products from '../assets/database/products.json';


const AppStateContext = createContext();
const AppDispatchContext = createContext();

const initialState = {
    items: products,
    filter: "",
    category: "All",
    cartItems: [],
}


function reducer(state, action) {
    switch (action.type) {
        case "chooseCategory":
            return {
                ...state,
                items: products.filter(x => x.category === action.category),
                filter: "",
                category: action.category
            }
        case "showAllCategory":
            return {
                ...state,
                items: products,
                filter: "",
                category: action.value
            }
        case "filterItems":
            return {
                ...state,
                filter: action.value
            }
        case "AddToCart":
            return {
                ...state,
                cartItems:[action.value, ...state.cartItems]
            }
        default:
            throw Error("something went wrong");
    }
}

export const AppStateProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AppStateContext.Provider value={state}>
            <AppDispatchContext.Provider value={dispatch}>
                {children}
            </AppDispatchContext.Provider>
        </AppStateContext.Provider>
        );
}

export const  useAppContext = () => {
    const context = useContext(AppStateContext);
    if (!context) {
        throw Error("useAppContext must be called within AppContext");
    }
    return context;
}

export const  useDispatchContext = () => {
    const context = useContext(AppDispatchContext);
    if (!context) {
        throw Error("useDispatchContext must be called within AppContext");
    }
    return context;
}

export const useChooseCategory = () => {
    const dispatch = useDispatchContext();

    function chooseCategory(category) {
        dispatch({type: "chooseCategory", category})
    }
    return chooseCategory;
}

export const useShowAll = () => {
    const dispatch = useDispatchContext();

    function showAllCategory(value) {
        dispatch({type: "showAllCategory", value})
    }
    return showAllCategory;
}

export const useFilter = () => {
    const dispatch = useDispatchContext();

    function filterItems(value) {
        dispatch({type: "filterItems", value})
    }

    return filterItems;
}
export const useAddToCart = () => {
    const dispatch = useDispatchContext();

    function addToCart(value) {
        dispatch({type: "AddToCart", value})
    }

    return addToCart;
}