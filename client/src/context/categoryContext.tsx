import React, { createContext, Dispatch, useContext, useReducer } from 'react';

export interface ISubCategory {
  id: number;
  name: string;
}

export interface ICategory {
  id: number;
  name: string;
  imgUrl: string;
  subCategories: ISubCategory[];
}

export type TCategoryState = ICategory[];

const CategoryStateContext = createContext<TCategoryState | undefined>(
  undefined
);

type TAction = { type: 'INIT'; payload: TCategoryState };

type TCategoryDispatch = Dispatch<TAction>;
const CategoryDispatchContext = createContext<TCategoryDispatch | undefined>(
  undefined
);

function categorysReducer(
  state: TCategoryState,
  action: TAction
): TCategoryState {
  switch (action.type) {
    case 'INIT':
      return action.payload;
    default:
      throw new Error('Unhandled action');
  }
}

export function CategoryContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [categories, dispatch] = useReducer(categorysReducer, []);

  return (
    <CategoryDispatchContext.Provider value={dispatch}>
      <CategoryStateContext.Provider value={categories}>
        {children}
      </CategoryStateContext.Provider>
    </CategoryDispatchContext.Provider>
  );
}

export function useCategoryState() {
  const state = useContext(CategoryStateContext);
  if (!state) throw new Error('CategoryProvider not found');
  return state;
}

export function useCategoryDispatch() {
  const dispatch = useContext(CategoryDispatchContext);
  console.log('dispatch: ', dispatch);
  console.log('CategoryDispatchContext: ', CategoryDispatchContext);

  return dispatch;
}
