import { memo } from 'react';
import {useChangePage} from '../context/AppContext';

const Pagination = ({ data, RenderComponent, pageLimit, dataLimit, currentPage }) => {
    const changeCurrentPage = useChangePage();
    const pages = Math.ceil(data.length / dataLimit);

    const goToNextPage = () => {
        changeCurrentPage(currentPage + 1);
    }
    const goToPreviousPage = () => {
        changeCurrentPage(currentPage - 1);
    }
    const changePage = (event) => {
        const pageNumber = Number(event.target.textContent);
        changeCurrentPage(pageNumber);
    }
    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return data.slice(startIndex, endIndex);
    }
    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
    }

    return (
        <div>
            <div className="product-list">
                {getPaginatedData().map((d, idx) => (
                    <RenderComponent key={idx} data={d} />
                ))}
            </div>
            <div className="pagination">
                <button 
                    onClick={goToPreviousPage}
                    className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
                >
                    prev
                </button>
                {getPaginationGroup().map((item, index) => (
                    <button 
                        key={index} 
                        onClick={changePage}
                        className={item > pages ? `paginationItem disabled` : (`paginationItem ${currentPage === item ? 'active' : null}`)}
                    >
                        <span>{item}</span>
                    </button>
                ))}
                <button 
                onClick={goToNextPage}
                className={`next ${currentPage === pages ? 'disabled' : ''}`}
                >
                    next
                </button>
            </div>
        </div>
    )
}

export default memo(Pagination);