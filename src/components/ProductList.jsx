import Product from './Product';
import {useAppContext} from '../context/AppContext';

const ProductList = () => {
    const state = useAppContext();

    return (
    <div className="product-list">
        {state.items
        .filter((item) => item.manufacturer.toLowerCase().includes(state.filter.toLocaleLowerCase()))
        .map(el => {
            return (
                <Product
                    key={el.id} 
                    id={el.id}
                    category={el.category}
                    model={el.model}
                    manufacturer={el.manufacturer}
                    country={el.country}
                    imageSrc={el.imageSrc}
                    price={el.price}
                    rating={el.rating}
                    description={el.description}
                    warranty={el.warranty}
                />
            )
        })}
    </div>
    )
}

export default ProductList;
