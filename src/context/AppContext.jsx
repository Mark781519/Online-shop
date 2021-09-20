import { useReducer, createContext, useContext } from "react";
import products from '../assets/database/products.json';


const AppStateContext = createContext();
const AppDispatchContext = createContext();

const initialState = {
    items: products,
    filter: "",
    category: "All",
    cartItems: [],
    cartList: [],
    wishlist: [],
    currentPage: 1,
}


function reducer(state, action) {
    switch (action.type) {
        case "chooseCategory":
            return {
                ...state,
                items: products.filter(x => x.category === action.category),
                filter: "",
                category: action.category,
                currentPage: 1
            }
        case "showAllCategory":
            return {
                ...state,
                items: products,
                filter: "",
                category: action.value,
                currentPage: 1
            }
        case "filterItems":
            return {
                ...state,
                filter: action.value,
                currentPage: 1
            }
        case "AddToCart":
            return {
                ...state,
                cartItems:[{...action.value, quantity: 1}, ...state.cartItems],
                cartList:[action.value.id, ...state.cartList]
            }
        case "DeleteItem":
            return {
                ...state,
                cartItems: state.cartItems.filter(el => el !== action.value),
                cartList: state.cartList.filter(el => el !== action.value.id)
            }
        case "ToggleWishlist":
            return {
                ...state,
                wishlist: state.wishlist.includes(action.value.id) ? state.wishlist.filter(el => el !== action.value.id) :
                [action.value.id, ...state.wishlist]
            }

        case "ChengeQuantity": 
            return {
                ...state,
                cartItems: state.cartItems.map((item) => item !== action.item ? 
                    item : 
                    {...item, quantity : (item.quantity + action.val) > 0 ? (item.quantity + action.val) : 1 })
            }

        case "changeCurrentPage":
            return {
                ...state,
                currentPage: action.value
            }

        case "MakeAnOrder":
            return {
                ...state,
                cartItems: [],
                cartList: []
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

export const useDeleteItem = () => {
    const dispatch = useDispatchContext();

    function deleteCartItem(value) {
        dispatch({type: "DeleteItem", value})
    }

    return deleteCartItem;
}

export const useToggleWishlist = () => {
    const dispatch = useDispatchContext();

    function toggleWishlist(value) {
        dispatch({type: "ToggleWishlist", value})
    }
    return toggleWishlist;
}

export const useChengeQuantity = () => {
    const dispatch = useDispatchContext();

    function chengeQuantity(item, val) {
        dispatch({type: "ChengeQuantity", item, val})
    }

    return chengeQuantity;
}

export const useChangePage = () => {
    const dispatch = useDispatchContext();

    function changeCurrentPage(value) {
        dispatch({type: "changeCurrentPage", value})
    }

    return changeCurrentPage;
}

export const useMakeAnOrder = () => {
    const dispatch = useDispatchContext();

    function makeAnOrder() {
        dispatch({type: "MakeAnOrder"})
    }

    return makeAnOrder;
}