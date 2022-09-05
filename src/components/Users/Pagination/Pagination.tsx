import React, { useState } from 'react';
import s from './pagination.module.css';

type PaginationType = {
    totalItemsCount: number,
    pageSize: number,
    currentPage: number,
    currentPageHandler: (pageNumber: number) => void,
    portionSize: number,
}

export const Pagination: React.FC<PaginationType> = ({
    currentPage,
    pageSize,
    totalItemsCount,
    currentPageHandler,
    portionSize,
}) => {

    const pagesCount = Math.ceil(totalItemsCount / pageSize);

    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const portionCount = Math.ceil(pagesCount / portionSize);
    const [ portionNumber, setPortionNumber ] = useState(1);
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;

    return <div className={s.pagination}>
            { portionNumber > 1 && 
                    <button onClick={ () =>  setPortionNumber(portionNumber - 1) }>PREV</button> }

            { pages.filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber).map(p => {
                return <span key={p} onClick={e => {
                    currentPageHandler(p)
                }} className={ currentPage === p ? s.selectedPage : '' }>{ p }</span>
            })}

            { portionCount > portionNumber && 
                    <button onClick={ () =>  setPortionNumber(portionNumber + 1) }>NEXT</button> }
        </div>
}
