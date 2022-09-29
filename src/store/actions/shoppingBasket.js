import { createAction } from '@reduxjs/toolkit';

// Добавить нужное количество нового товара
export const addNewProduct = createAction('product/new/add');
// Пометить весь товар этого вида как удаленный
export const removeAllProduct = createAction('product/all/remove');
// Убрать пометку как удаленный
export const reestablishProduct = createAction('product/reestablish');
// Добавить нужное количество товара к уже существующему
export const addProduct = createAction('product/add');
// Удалить часть товара одного вида из корзины
export const removeProduct = createAction('product/remove');
