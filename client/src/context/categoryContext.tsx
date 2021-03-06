import React, { createContext, Dispatch, useContext, useReducer } from 'react';
import { ICategory, ISubcategory } from '../../../types/modelTypes';

export interface ICategoryInContext extends ICategory {
  subCategories: ISubcategory[];
}

export type TCategoryState = ICategoryInContext[];

const CategoryStateContext = createContext<TCategoryState | undefined>(
  undefined
);

type TAction = { type: 'INIT'; payload: TCategoryState };

type TCategoryDispatch = Dispatch<TAction>;
const CategoryDispatchContext = createContext<TCategoryDispatch | undefined>(
  undefined
);

const categorysReducer = (
  state: TCategoryState,
  action: TAction
): TCategoryState => {
  switch (action.type) {
    case 'INIT':
      return action.payload;
    default:
      throw new Error('Unhandled action');
  }
}

export const CategoryContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [categories, dispatch] = useReducer(categorysReducer, []);

  return (
    <CategoryDispatchContext.Provider value={dispatch}>
      <CategoryStateContext.Provider value={categories}>
        {children}
      </CategoryStateContext.Provider>
    </CategoryDispatchContext.Provider>
  );
}

export const useCategoryState = () => {
  const state = useContext(CategoryStateContext);
  if (!state) throw new Error('CategoryProvider not found');
  return state;
}

export const useCategoryDispatch = () => {
  const dispatch = useContext(CategoryDispatchContext);

  return dispatch;
}
