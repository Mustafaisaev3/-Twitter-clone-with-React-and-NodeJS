import React, {createContext, useReducer, useMemo, useContext} from "react";

export interface State {
  displayModal: boolean,
  modalView: string
}

const initialState: State = {
  displayModal: false,
  modalView: 'SIGN_IN_VIEW'
}


type MODAL_VIEWS =
  | "SIGN_IN_VIEW"
  | "LOGIN_VIEW"
  | "FORGET_PASSWORD"
  | "ADD_TWEET_MODAL"
  | "PRODUCT_VIEW";

type Action = 
  |
    {
      type: 'OPEN_MODAL'
    }
  |
    {
      type: 'CLOSE_MODAL'
    }
  |
    {
      type: 'SET_MODAL_VIEW',
      view: MODAL_VIEWS
    }

export const UIContext = createContext<State | any>(initialState);
UIContext.displayName = "UIContext";

const UIReducer = (state: State, action: Action) => {
  switch(action.type) {
    case 'OPEN_MODAL':
      return {
        ...state,
        displayModal: true
      }
    case 'CLOSE_MODAL':
      return {
        ...state,
        displayModal: false
      }
    case 'SET_MODAL_VIEW':
      return {
        ...state,
        modalView: action.view
      }
  }
}

export const UIProvider = (props: any) => {
  const [state, dispatch] = useReducer(UIReducer, initialState);


  const closeModal = () => dispatch({type: 'CLOSE_MODAL'})
  const openModal = () => dispatch({type: 'OPEN_MODAL'})
  const setModalView = (view: MODAL_VIEWS) => dispatch({type: 'SET_MODAL_VIEW', view})

  const value = useMemo(
    () => ({
      ...state,
      openModal,
      closeModal,
      setModalView,
    }),
    [state]
  );

  return <UIContext.Provider value={value} {...props} />;
}

export const useUI = () => {
  const context = useContext(UIContext);
  if (context === undefined) {
    throw new Error(`useUI must be used within a UIProvider`);
  }
  return context;
};

export const ManagedUIContext = ({ children }: {children: any}) => (
    <UIProvider>{children}</UIProvider>
);
