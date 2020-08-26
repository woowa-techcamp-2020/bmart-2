import React, { createContext, Dispatch, useContext, useReducer } from 'react';
import { IDib } from '../../../types/modelTypes';

export type TDibState = IDib[];

const DibStateContext = createContext<TDibState | undefined>(undefined);

type TAction = { type: 'INIT'; payload: TDibState };

type TCategoryDispatch = Dispatch<TAction>;
const DibDispatchContext = createContext<TCategoryDispatch | undefined>(
  undefined
);

function dibReducer(state: TDibState, action: TAction): TDibState {
  switch (action.type) {
    case 'INIT':
      return action.payload;
    default:
      throw new Error('Unhandled action');
  }
}

export function DibContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [dibs, dispatch] = useReducer(dibReducer, []);

  return (
    <DibDispatchContext.Provider value={dispatch}>
      <DibStateContext.Provider value={dibs}>
        {children}
      </DibStateContext.Provider>
    </DibDispatchContext.Provider>
  );
}

export function useDibState() {
  const state = useContext(DibStateContext);
  if (!state) throw new Error('DibContextProvider not found');
  return state;
}

export function useDibDispatch() {
  const dispatch = useContext(DibDispatchContext);
  if (!dispatch) throw new Error('DibDispatchProvider not found');

  return dispatch;
}
