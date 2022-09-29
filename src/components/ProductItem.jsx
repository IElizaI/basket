/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  addNewProduct, addProduct, removeProduct, removeAllProduct, reestablishProduct,
} from '../store/actions/shoppingBasket';
import iconDelete from '../img/icon-delete.svg';

const Button = styled.div`
  cursor: pointer;
  width: 90px;
  height: 30px;
  background-color: #a83232;
  color: #ffffff;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Tr = styled.tr`
  height: 40px;
`;

const Td = styled.td`
  &:last-child {
    display: flex;
    justify-content: center;
  }
`;

const TdDeleted = styled(Td)`
  color: red;
`;

const Amount = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
`;

const Plus = styled.div`
  padding-right: 10px;
  font-size: 26px;
  cursor: pointer;
`;

const Minus = styled(Plus)`
  padding-right: 0px;
  padding-left: 10px;
`;

const Img = styled.img`
  width: auto;
  height: 25px;
  cursor: pointer;
`;
const Reestablish = styled.td`
  cursor: pointer;
  text-align: center;
`;

const ProductItem = ({ item, canDelete }) => {
  const [select, setSelect] = useState(1);
  const basket = useSelector((state) => state.shoppingBasket.products);
  const dispatch = useDispatch();

  const addToBasket = (product, amount) => {
    dispatch(addNewProduct({ product, amount }));
  };
  const deleteToBasket = (id) => {
    dispatch(removeAllProduct(id));
  };
  const reestablish = (id) => {
    dispatch(reestablishProduct(id));
  };
  const changeSelect = (event) => {
    setSelect(Number(event.target.value));
  };
  const elementSearch = (element) => basket.find((el) => el.id === element.id);

  const add = (id, amount) => {
    dispatch(addProduct({ id, amount }));
  };
  const turnDown = (id, amount) => {
    dispatch(removeProduct({ id, amount }));
  };

  const getQuantity = (id) => {
    const quantity = basket.find((product) => product.id === id);
    return quantity.amount;
  };

  const restoreButton = (
    <>
      <td />
      <td />
      <td />
      <Reestablish onClick={() => reestablish(item.id)}>
        Восстановить
      </Reestablish>
    </>
  );
  const deleteButton = item.deleted ? restoreButton : (
    <Td>
      <Img src={iconDelete} alt="удалить" onClick={() => deleteToBasket(item.id)} />
    </Td>
  );
  const basketButton = canDelete ? deleteButton : '';

  return (
    <Tr>
      {canDelete && item.deleted ? (
        <TdDeleted>
          (
          {item.title}
          )
          {' '}
          удален из корзины
        </TdDeleted>
      ) : (
        <Td>{item.title}</Td>
      )}
      {canDelete && item.deleted ? (
        ''
      ) : (
        <>
          <Td>
            <select value={select} onChange={(event) => changeSelect(event)}>
              <option value="1">1шт./уп.</option>
              <option value="5">5шт./уп.</option>
              <option value="10">10шт./уп.</option>
            </select>
          </Td>
          <Td>
            {item.price}
            ₽
          </Td>
          <Td>
            {elementSearch(item) ? (
              <Amount>
                <Plus onClick={() => add(item.id, select)}>+</Plus>
                {getQuantity(item.id)}
                <Minus onClick={() => turnDown(item.id, select)}>-</Minus>
              </Amount>
            ) : (
              <Button type="button" onClick={() => addToBasket(item, select)}>в корзину</Button>
            )}
          </Td>
        </>

      )}
      {basketButton}
    </Tr>
  );
};

ProductItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    deleted: PropTypes.bool,
  }).isRequired,
  canDelete: PropTypes.bool.isRequired,
};

export default ProductItem;
