import React from 'react';
import './App.css';
import { ManagedUIContext } from './context/ui.context';
import ManagedModal from './components/modal/managed-modal';
import { Switch, Route } from 'react-router-dom';

// Pages
import {SignIn} from './pages/SignIn';
import {Home} from './pages/Home/Home';
import {Test} from './pages/Test';

function App() {
  return (
    <>
    <ManagedUIContext>
      <Switch>
        <Route path='/signin' component={SignIn}/>
        <Route path='/test' component={Test}/>
        <Route path='/' component={Home}/>
      </Switch>
      <ManagedModal />
    </ManagedUIContext>
    </>
  );
}

export default App;
