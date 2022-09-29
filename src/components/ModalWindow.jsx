/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ProductItem from './ProductItem';

const CloseButton = styled.div`
  border: none;
  background-color: #a83232;
  width: 90px;
  height: 30px;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  cursor: pointer;
`;

const Table = styled.table`
  width: 100%;
`;

const Th = styled.th`
  text-align: start;
`;

const customStyles = {
  content: {
    width: '60%',
    height: '70%',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: '1px solid #a83232',
  },
};

const ShoppingBasket = ({ modalIsOpen, setIsOpen }) => {
  const basket = useSelector((state) => state.shoppingBasket.products);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <CloseButton type="button" onClick={closeModal}>close</CloseButton>
        {basket.length > 0 ? (
          <Table>
            <thead>
              <tr>
                <Th />
                <Th />
                <Th />
                <Th />
              </tr>
            </thead>
            <tbody>
              {basket.map((product) => <ProductItem item={product} key={product.id} canDelete />)}
            </tbody>
          </Table>
        ) : (
          <div>Корзина пока пуста</div>
        )}
      </Modal>
    </div>
  );
};

ShoppingBasket.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default ShoppingBasket;
