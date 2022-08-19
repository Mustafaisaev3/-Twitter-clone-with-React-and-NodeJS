import React, {useReducer, createContext, useContext, useMemo} from 'react'

export interface State {
    modalVisible: boolean,
    modalView: string
}

const initialState: State = {
    modalVisible: false,
    modalView: 'SIGN_IN_MODAL'
}

type ModalViewsType = 'SIGN_IN_MODAL' | 'SIGN_UP_MODAL'
type Actions = {type: 'OPEN_MODAL'} | {type: 'CLOSE_MODAL'} | {type: 'SET_MODAL_VIEW', view: ModalViewsType}

export const UIContext = createContext<State | any>(initialState);
UIContext.displayName = 'UIContext'

const uiReducer = (state: State, action: Actions) => {
    switch(action.type){
        case 'OPEN_MODAL':
            return {
                ...state,
                modalVisible: true
            }
        case 'CLOSE_MODAL':
            return {
                ...state,
                modalVisible: false
            }
        case 'SET_MODAL_VIEW':
            return {
                ...state,
                modalView: action.view
            }
    }
}

const UIProvider = (props: any) => {
    const [state, dispatch] = useReducer(uiReducer, initialState)

    const openModal = () => dispatch({type: 'OPEN_MODAL'})
    const closeModal = () => dispatch({type: 'CLOSE_MODAL'})
    const setModal = (view: ModalViewsType) => dispatch({type: 'SET_MODAL_VIEW', view })

    const value = useMemo(() => (
        {
            ...state,
            openModal,
            closeModal,
            setModal,

        }
    ), [state])

    return <UIContext.Provider value={value} {...props} />
}






