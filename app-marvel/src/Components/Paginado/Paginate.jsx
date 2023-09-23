import React from 'react';
import './paginate.scss'

const Paginate = ({ totalPages, currentPage, onPageChange }) => {
  const pageNumbers = [];
  
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className={currentPage === number ? 'active' : ''}>
            <button onClick={() => onPageChange(number)}>{number}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Paginate;
