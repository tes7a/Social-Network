import React from 'react';
import s from './pagination.module.css';

type PaginationType = {
    totalUserCount: number,
    pageSize: number,
    currentPage: number,
    currentPageHandler: (pageNumber: number) => void,
}

export const Pagination: React.FC<PaginationType> = ({
    currentPage,
    pageSize,
    totalUserCount,
    currentPageHandler,
}) => {

    const pagesCount = Math.ceil(totalUserCount / pageSize);

    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
            { pages.map(p => {
                return <span onClick={e => {
                    currentPageHandler(p)
                }} className={ currentPage === p ? s.selectedPage : '' }>{ p }</span>
            })}
        </div>
}
