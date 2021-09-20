import Product from './Product';
import {useAppContext} from '../context/AppContext';
import Pagination from './Pagination';
import { memo } from 'react';

const ProductList = () => {
    const state = useAppContext();
    const filteredItems = state.items.filter((item) => 
        item.manufacturer.toLowerCase().includes(state.filter.toLocaleLowerCase()));

    return (
        <div className="width-limiter app__content">
            <aside className="app__sidebar">Sidebar (WIP)</aside>
            <div className="app__main">
                {state.items.length > 0 ? (
                    <div>
                        {filteredItems.length > 0 ? (
                            <Pagination 
                            data={filteredItems}
                            RenderComponent={Product}
                            pageLimit={3}
                            dataLimit={9}
                            currentPage={state.currentPage}
                    />
                    ) : (
                        <h1>Nothing was found for your query</h1>
                    )}
                    </div>
                ) : (
                    <h1>No Products to display</h1>
                )}
            </div>
        </div>
    )
}

export default memo(ProductList);
