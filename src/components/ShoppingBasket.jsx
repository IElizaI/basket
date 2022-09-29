import React from 'react';
import styled from 'styled-components';
import iconShoppingBasket from '../img/icon-shoppingbasket.svg';
import ModalWindow from './ModalWindow';

const Container = styled.div`
  width: auto;
  height: 40px;
`;

const Icon = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const ShoppingBasket = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <Container>
      <Icon onClick={openModal} src={iconShoppingBasket} alt="иконка корзины" />
      <ModalWindow modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
    </Container>
  );
};

export default ShoppingBasket;
