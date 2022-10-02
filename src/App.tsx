import React, { useEffect } from 'react';
import './App.css';
import { ManagedUIContext } from './context/ui.context';
import ManagedModal from './components/modal/managed-modal';
import { Switch, Route, useHistory } from 'react-router-dom';

// Pages
import {SignIn} from './pages/SignIn';
import {Home} from './pages/Home/Home';
import ToastList from './components/toast/ToastList';
import { useDispatch } from 'react-redux';
import { AuthApi } from './services/api/authApi';
import { setUserData } from './store/ducks/user/action';
import { useSelector } from 'react-redux';
import { selectIsAuth, selectUserStatus } from './store/ducks/user/selectors';
import { LoadingState } from './store/types';

function App() {
  const dispatch = useDispatch()
  const history = useHistory()

  const isAuth = useSelector(selectIsAuth)
  const loadingStatus = useSelector(selectUserStatus)
  const isReady = loadingStatus !== LoadingState.NEVER && loadingStatus !== LoadingState.LOADED

  const checkAuth = async () => {
    try {
      const {data} = await AuthApi.getMe()
      dispatch(setUserData(data)) 
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    checkAuth()
  }, [])

  useEffect(() => {
    if(!isAuth && isReady){
      history.push('/signin')
    } else {
      history.push('/home')
    }
  }, [isAuth, isReady])



  return (
    <>
    <ManagedUIContext>
      <Switch>
        <Route path='/signin' component={SignIn}/>
        <Route path='/home' component={Home}/>
      </Switch>
      <ManagedModal />
      <ToastList />
    </ManagedUIContext>
    </>
  );
}

export default App;
