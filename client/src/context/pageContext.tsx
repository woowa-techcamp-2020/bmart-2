import React, { createContext, Dispatch, useContext, useReducer } from 'react';

export interface IPageInContext {
  onNotification: boolean;
  message: string;
  pathname: string;
}

export type TPageState = IPageInContext;

const PageStateContext = createContext<TPageState | undefined>(undefined);

type TAction =
  | { type: 'NOTI_OPEN'; message: string }
  | { type: 'NOTI_CLOSE' }
  | { type: 'PATHNAME_CHANGE'; pathname: string };

type TPageDispatch = Dispatch<TAction>;
const PageDispatchContext = createContext<TPageDispatch | undefined>(undefined);

function pageReducer(state: TPageState, action: TAction): TPageState {
  switch (action.type) {
    case 'NOTI_OPEN':
      return {
        ...state,
        onNotification: true,
        message: action.message,
      };
    // return { onNotification: true, message: action.message };
    case 'NOTI_CLOSE':
      return {
        ...state,
        onNotification: false,
        message: '',
      };
    case 'PATHNAME_CHANGE':
      return {
        ...state,
        pathname: action.pathname,
      };
    default:
      throw new Error('Unhandled action');
  }
}

export function PageContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [page, dispatch] = useReducer(pageReducer, {
    onNotification: false,
    message: '',
    pathname: '/',
  });

  return (
    <PageDispatchContext.Provider value={dispatch}>
      <PageStateContext.Provider value={page}>
        {children}
      </PageStateContext.Provider>
    </PageDispatchContext.Provider>
  );
}

export function usePageState() {
  const state = useContext(PageStateContext);
  if (!state) throw new Error('pageProvider not found');
  return state;
}

export function usePageDispatch() {
  const dispatch = useContext(PageDispatchContext);
  return dispatch;
}

export function openNotification(dispatch: any, message: string) {
  dispatch({ type: 'NOTI_CLOSE' });
  dispatch({ type: 'NOTI_OPEN', message: message });
}

export function closeNotification(dispatch: any) {
  dispatch({ type: 'NOTI_CLOSE' });
}
