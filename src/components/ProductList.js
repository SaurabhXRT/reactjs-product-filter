import React, { useState } from 'react';
import styled from 'styled-components';
import Pagination from './Pagination';
import productsData from '../ProductData';

const ProductList = () => {
  const [products] = useState(productsData);
  const [filters, setFilters] = useState({ category: '', price: '' });
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4; 

  const filteredAndSortedProducts = products
    .filter(product => (
      (filters.category ? product.category === filters.category : true) 
    ))
    .filter(product => {
      if (filters.price === 'below100') {
        return product.price < 100;
      } else if (filters.price === 'below200') {
        return product.price < 200;
      } else if (filters.price === 'below500') {
        return product.price < 500;
      } else {
        return true; 
      }
    });

 
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredAndSortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
    setCurrentPage(1); 
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Container>
      <FilterSection>
        <FilterSelect name="category" onChange={handleFilterChange}>
          <option value="">All Categories</option>
          <option value="Category A">Category A</option>
          <option value="Category B">Category B</option>
          <option value="Category C">Category C</option>
        </FilterSelect>
        <FilterSelect name="price" onChange={handleFilterChange}>
          <option value="">Show All Prices</option>
          <option value="below100">Below 100</option>
          <option value="below200">Below 200</option>
          <option value="below500">Below 500</option>
        </FilterSelect>
      </FilterSection>
      <ProductGrid>
        {currentProducts.map((product) => (
          <Product key={product.id}>
            <ProductImage src={product.image} alt={product.title} />
            <ProductTitle>{product.title}</ProductTitle>
            <ProductDescription>{product.description}</ProductDescription>
            <ProductPrice>${product.price}</ProductPrice>
          </Product>
        ))}
      </ProductGrid>
      <Pagination
        currentPage={currentPage}
        productsPerPage={productsPerPage}
        totalProducts={filteredAndSortedProducts.length}
        onPageChange={handlePageChange}
      />
    </Container>
  );
};

export default ProductList;

const Container = styled.div`
  margin: 3rem auto;
  width: 90%;
`;

const FilterSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const FilterSelect = styled.select`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  font-size: 1rem;
  margin-right: 1rem;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1rem;
  
`;

const Product = styled.div`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 1rem;
  background-color: #fff;
  transition: transform 0.2s;
  cursor: pointer;
  box-shadow:  0 .5rem 1.5rem rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.02);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 10rem;
  border-radius: 4px;
`;

const ProductTitle = styled.h2`
  font-size: 1.25rem;
  margin: 0.5rem 0;
`;

const ProductDescription = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 0.5rem 0;
`;

const ProductPrice = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  color: black;
  margin: 0.5rem 0;
`;
