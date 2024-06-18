import React from 'react';

import './App.scss';

import SignBoard from "./components/SignBoard/SignBoard";
import Controller from "./components/Controllers/Controllers";
import { useState } from 'react';

function App() {
  const [sharedState, setSharedState] = useState(0);

  const updateState = (newState) => {
    setSharedState(newState);
  };
  return (
    <div className='app'>
      <SignBoard sharedState = {sharedState}/>
      <Controller
        updateState = {updateState}
      />
    </div>
  );
}

export default App;