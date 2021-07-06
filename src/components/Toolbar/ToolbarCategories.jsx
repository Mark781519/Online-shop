import { memo } from "react";
import { useChooseCategory, useAppContext, useShowAll } from '../../context/AppContext';

const ToolbarCategories = () => {
const cls = "button button--secondary toolbar__button";
const isActive = "button button--secondary toolbar__button toolbar__button--active";
const chooseCategory = useChooseCategory();
const showAllCategory = useShowAll();
const state = useAppContext();

const handleClick = (e) => {
    chooseCategory(e.target.name);
}
const showAll = (e) => {
    showAllCategory(e.target.name);
}

    return (
        <div className="toolbar__categories">
            <button className={state.category === "TV" ? isActive : cls} type="button" title="Switch to 'TV'"  name="TV" onClick={handleClick}>TV</button>
            <button className={state.category === "Laptop" ? isActive : cls} type="button" title="Switch to 'Laptop'" name="Laptop" onClick={handleClick}>Laptop</button>
            <button className={state.category === "Smartphone" ? isActive : cls} type="button" title="Switch to 'Smartphone'" name="Smartphone" onClick={handleClick}>Smartphone</button>
            <button className={state.category === "All" ? isActive : cls} type="button" title="Switch to 'All'" name="All" onClick={showAll}>All</button>
        </div>
    
    )
}

export default memo(ToolbarCategories);