import React from 'react';
import './Pagination.css'

const Pagination = ({currenciesPerPage, totalCurrencies, paginate}) => {
    const paginationNumbers = []

    for (let i = 1; i <= Math.ceil((totalCurrencies / currenciesPerPage)); i++ ){
        paginationNumbers.push(i)
    }

    return (
        <div className="pagination">
            <ul>
                {
                    paginationNumbers.map(number => (
                        <li className="pagination-item" key={number} onClick={() => paginate(number)}>
                            {number}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Pagination;