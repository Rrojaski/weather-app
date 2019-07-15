import React from 'react';
import './App.css';
import Header from './layout/Header/Header';
import Content from './layout/Content';
import Logo from './component/Logo/Logo';
import LogoImg from './component/Logo/Logo.svg';
import Navigation from './component/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Header>
        <Logo src={LogoImg} />
        <Navigation />
      </Header>
      <Content />      
    </div>
  );
}

export default App;
