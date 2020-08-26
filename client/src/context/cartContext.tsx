import React, { createContext, Dispatch, useContext, useReducer } from 'react';
import { IProduct } from '../../../types/modelTypes';
import * as api from '../apis/cart';

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

function cartReducer(state: TCartState, action: TAction): TCartState {
  switch (action.type) {
    case 'GET_CART':
      return action.payload;
    default:
      throw new Error('Unhandled action');
  }
}

export function CartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={cart}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
}

export function useCartState() {
  const state = useContext(CartStateContext);
  if (!state) throw new Error('cartProvider not found');
  return state;
}

export function useCartDispatch() {
  const dispatch = useContext(CartDispatchContext);
  return dispatch;
}

export async function getCarts(dispatch: any) {
  const carts = await api.getCarts();
  dispatch({ type: 'GET_CART', payload: carts });
}

export async function updateCart(
  dispatch: any,
  userId: number,
  productId: number,
  count: number
) {
  await api.updateCart(productId, userId, count);
  await getCarts(dispatch);
}

export async function createCart(
  dispatch: any,
  userId: number,
  productId: number,
  count: number
) {
  await api.createCart(productId, userId, count);
  await getCarts(dispatch);
}
