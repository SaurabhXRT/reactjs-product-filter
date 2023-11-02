import React from 'react';
import styled from 'styled-components';
import ProductList from './components/ProductList';

function App() {
  return (
    <AppContainer>
      <Header>
        <HeaderTitle> Saurabh kumar Product List</HeaderTitle>
      </Header>
      <ProductList />
      <Footer>
        &copy; 2023  <a href='https://www.linkedin.com/in/saurabh-kumar-xrt/'> saurabh kumar </a>
      </Footer>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  background-color: #fff;
  color: black;
  text-align: center;
  padding: 1rem;
  box-shadow:  0 .5rem 1.5rem rgba(0, 0, 0, 0.1);
  
`;

const HeaderTitle = styled.h1`
  font-size: 2rem;
  margin: 0;
`;

const Footer = styled.footer`
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 1rem;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  box-shadow:  1.5rem .5rem 1.5rem black;
  padding: 2rem;

  a {
    color: #fff; 
    text-decoration: none; 
  }
  
`;

