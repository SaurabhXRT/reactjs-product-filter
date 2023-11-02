import React from 'react';
import styled from 'styled-components';

const Pagination = ({ currentPage, productsPerPage, totalProducts, onPageChange }) => {
  return (
    <PaginationContainer>
      <Arrow
        className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
        onClick={() => {
          if (currentPage > 1) {
            onPageChange(currentPage - 1);
          }
        }}
      >
        &lt; Prev
      </Arrow>
      <Arrow
        className={`next ${currentPage === Math.ceil(totalProducts / productsPerPage) ? 'disabled' : ''}`}
        onClick={() => {
          if (currentPage < Math.ceil(totalProducts / productsPerPage)) {
            onPageChange(currentPage + 1);
          }
        }}
      >
        Next &gt;
      </Arrow>
    </PaginationContainer>
  );
};

export default Pagination;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

const Arrow = styled.span`
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5rem;
  margin: 0.2rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  &.prev {
    margin-right: 0.5rem;
  }
  &.next {
    margin-left: 0.5rem;
  }
  &.disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;
