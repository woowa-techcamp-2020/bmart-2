import React, { createContext, Dispatch, useContext, useReducer } from 'react';
import { IProduct } from '../../../types/modelTypes';

export interface ICartInContext {
  userId: number;
  product: IProduct[];
  count: number;
}

export type TCartState = ICartInContext[];

const CartStateContext = createContext<TCartState | undefined>(undefined);

type TAction = { type: 'INIT'; payload: TCartState };

type TCartDispatch = Dispatch<TAction>;
const CartDispatchContext = createContext<TCartDispatch | undefined>(undefined);

function cartReducer(state: TCartState, action: TAction): TCartState {
  switch (action.type) {
    case 'INIT':
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
  console.log('dispatch: ', dispatch);
  console.log('CartDispatchContext: ', CartDispatchContext);

  return dispatch;
}
