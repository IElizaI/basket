import React from 'react';
import styled from 'styled-components';
import ShoppingBasket from './ShoppingBasket';

const Header = styled.header`
  width: 100%;
`;

const Container = styled.div`
  max-width: 1680px;
  width: 100%;
  margin: 0 auto;
  height: 70px;
  display: flex;
  justify-content: flex-end;
  padding: 0 20px;
  align-items: center;
`;

const SiteHeader = () =>
  (
    <Header>
      <Container>
        <ShoppingBasket />
      </Container>
    </Header>
  );

export default SiteHeader;
