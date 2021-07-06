import { memo } from "react";
import { useFilter, useAppContext } from '../../context/AppContext';

const Filter = () => {
const filterItems = useFilter();
const state = useAppContext();

  return (
    <div className="toolbar__search">
      <input
        value={state.filter}
        onChange={e => filterItems(e.target.value)}
        type="text"
        className="input toolbar__input"
        name="search"
        placeholder="Search"
      />
    </div>
  );
};

export default memo(Filter);