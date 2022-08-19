import React from 'react';
import './App.css';
import SignIn from './pages/SignIn';
import { ManagedUIContext } from './context/ui.context';
import ManagedModal from './components/modal/managed-modal';

function App() {
  return (
    <>
    <ManagedUIContext>
      <SignIn />
      <ManagedModal />
    </ManagedUIContext>
    </>
  );
}

export default App;
