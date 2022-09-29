/* eslint-disable max-len */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import styled from 'styled-components';
import ProductItem from './ProductItem';
import products from '../data';

const Section = styled.section`
  max-width: 1680px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  padding: 40px 20px;
  align-items: center;
`;

const List = styled.div`
  width: 70%;
`;

const Table = styled.table`
  width: 100%;
`;

const Th = styled.th`
  text-align: start;
`;

const ProductList = () => (
  <Section>
    <List>
      <Table>
        <thead>
          <tr>
            <Th>Товар</Th>
            <Th>Упаковка</Th>
            <Th>Цена</Th>
            <Th />
          </tr>
        </thead>
        <tbody>
          {products.map((product) => <ProductItem item={product} key={product.id} canDelete={false} />)}
        </tbody>
      </Table>
    </List>
  </Section>
);

export default ProductList;
