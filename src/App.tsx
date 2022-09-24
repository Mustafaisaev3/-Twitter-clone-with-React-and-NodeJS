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
import { selectIsAuth } from './store/ducks/user/selectors';

function App() {
  const dispatch = useDispatch()
  const history = useHistory()

  const isAuth = useSelector(selectIsAuth)

  const checkAuth = async () => {
    try {
      const {data} = await AuthApi.getMe()
      dispatch(setUserData(data)) 
    } catch (error) {
      
    }
  }

  useEffect(() => {
    if(isAuth){
      // history.push('/home')
    }
  }, [isAuth])

  useEffect(() => {
    checkAuth()
  }, [])

  return (
    <>
    <ManagedUIContext>
      <Switch>
        <Route path='/signin' component={SignIn}/>
        <Route path='/' component={Home}/>
      </Switch>
      <ManagedModal />
      <ToastList />
    </ManagedUIContext>
    </>
  );
}

export default App;
