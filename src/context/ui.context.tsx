import React, {createContext, useReducer, useMemo, useContext} from "react";

export interface State {
  displayModal: boolean,
  modalView: string,
  displayToast: boolean,
  toastList: ToastType[],
}

const initialState: State = {
  displayModal: false,
  modalView: 'SIGN_IN_VIEW',
  displayToast: false,
  toastList: [],

}

export type ToastType = {
  id: number,
  toastType: string,
  text: string
}


type MODAL_VIEWS =
  | "SIGN_IN_VIEW"
  | "SIGN_UP_VIEW"
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
  | 
    {
      type: 'OPEN_TOAST'
    } 
  | 
    {
      type: 'CLOSE_TOAST'
    } 
  | 
    {
      type: 'ADD_TOAST',
      toast: ToastType
    } 
  | 
    {
      type: 'DELETE_TOAST',
      id: number
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
    case 'OPEN_TOAST':
      return {
        ...state,
        displayToast: true
      }
    case 'CLOSE_TOAST':
      return {
        ...state,
        displayToast: false
      }
    case 'ADD_TOAST':
      const toast = action.toast
      let newToastLiast: ToastType[] = []
      newToastLiast.unshift(toast)

      return {
        ...state,
        toastList: [...state.toastList, ...newToastLiast]
      }
    case 'DELETE_TOAST':
      let newToastList = state.toastList.filter((e) => {
        return action.id !== e.id 
      })
      return {
        ...state,
        toastList: [...newToastList]
      }
  }
}

export const UIProvider = (props: any) => {
  const [state, dispatch] = useReducer(UIReducer, initialState);


  const closeModal = () => dispatch({type: 'CLOSE_MODAL'})
  const openModal = () => dispatch({type: 'OPEN_MODAL'})
  const setModalView = (view: MODAL_VIEWS) => dispatch({type: 'SET_MODAL_VIEW', view})
  const openToast = () => dispatch({type: 'OPEN_TOAST'})
  const closeToast = () => dispatch({type: 'CLOSE_TOAST'})
  const addToast = (toast: ToastType) => dispatch({type: 'ADD_TOAST', toast})
  const deleteToast = (id: number) => dispatch({type: 'DELETE_TOAST', id})

  const value = useMemo(
    () => ({
      ...state,
      openModal,
      closeModal,
      setModalView,
      openToast,
      closeToast,
      addToast,
      deleteToast
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
