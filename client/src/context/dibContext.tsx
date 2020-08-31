import React, { createContext, Dispatch, useContext, useReducer } from 'react';
import { IProduct } from '../../../types/modelTypes';

export type TDibState = IProduct[];

// type TAction = { type: TActionType; payload: TDibState };
type TAction =
  | { type: 'INIT'; products: IProduct[] }
  | { type: 'ADD'; product: IProduct }
  | { type: 'REMOVE'; productId: number };

type TDibDispatch = Dispatch<TAction>;
const DibStateContext = createContext<TDibState | undefined>(undefined);
const DibDispatchContext = createContext<TDibDispatch | undefined>(undefined);

const dibReducer = (state: TDibState, action: TAction): TDibState => {
  switch (action.type) {
    case 'INIT':
      return action.products;
    case 'ADD':
      return state.concat(action.product);
    case 'REMOVE':
      return state.filter((product) => product.id !== action.productId);
    default:
      throw new Error('Unhandled action');
  }
}

export const DibContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [dibs, dispatch] = useReducer(dibReducer, []);

  return (
    <DibDispatchContext.Provider value={dispatch}>
      <DibStateContext.Provider value={dibs}>
        {children}
      </DibStateContext.Provider>
    </DibDispatchContext.Provider>
  );
}

export const useDibState = () => {
  const state = useContext(DibStateContext);
  if (!state) throw new Error('DibContextProvider not found');
  return state;
}

export const useDibDispatch = () => {
  const dispatch = useContext(DibDispatchContext);
  if (!dispatch) throw new Error('DibDispatchProvider not found');

  return dispatch;
}
