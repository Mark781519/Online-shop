import { memo } from "react";
import Filter from './Filter';
import ToolbarCategories from './ToolbarCategories';

const Toolbar = () => {
    return (
    <div className="toolbar">
        <div className="width-limiter toolbar__wrapper">
            <ToolbarCategories />
            <Filter />
        </div>
    </div>
    )
}

export default memo(Toolbar);