import React, { createContext, Dispatch, useContext, useReducer } from 'react';
import { IProduct } from '../../../types/modelTypes';
import * as api from '../apis/cart';
import { createOrder } from '../apis/order';

export interface ICartInContext {
  userId: number;
  product: IProduct;
  count: number;
}

export type TCartState = ICartInContext[];

const CartStateContext = createContext<TCartState | undefined>(undefined);

type TAction = { type: 'GET_CART'; payload: TCartState };

type TCartDispatch = Dispatch<TAction>;
const CartDispatchContext = createContext<TCartDispatch | undefined>(undefined);

const cartReducer = (state: TCartState, action: TAction): TCartState => {
  switch (action.type) {
    case 'GET_CART':
      return action.payload;
    default:
      throw new Error('Unhandled action');
  }
}

export const CartContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={cart}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
}

export const useCartState = () => {
  const state = useContext(CartStateContext);
  if (!state) throw new Error('cartProvider not found');
  return state;
}

export const useCartDispatch = () => {
  const dispatch = useContext(CartDispatchContext);
  return dispatch;
}

export const getCarts = async (dispatch: any) => {
  const result = await api.getCarts();
  dispatch({ type: 'GET_CART', payload: result.carts });
}

export const updateCart = async (
  dispatch: any,
  productId: number,
  count: number
) => {
  await api.updateCart(productId, count);
  await getCarts(dispatch);
}

export const createCart = async(
  dispatch: any,
  productId: number,
  count: number
) => {
  const result = await api.isExist(productId);
  if (result.cart.length > 0) {
    await updateCart(dispatch, productId, count);
    return;
  }
  await api.createCart(productId, count);
  await getCarts(dispatch);
}

export const removeCart= async (dispatch: any, productId: number) => {
  await api.removeCart(productId);
  await getCarts(dispatch);
}

export const order = async (dispatch: any, carts: TCartState) => {
  const products = carts.map((cart) => {
    return { count: cart.count, id: cart.product.id };
  });
  const response = await createOrder({ products });
  if (response.success) {
    await api.removeCartByUser();
    await getCarts(dispatch);
  }
}
