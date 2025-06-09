import './App.css';
import Catalogo from './components/catalogo.jsx';
import Header from './components/header.jsx';
import Navbar from './components/NavBar.jsx';
import Login from './components/Login.jsx';
import Cadastro from './components/Cadastro.jsx';
import React, { useState } from 'react';

function App() {
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [isCadastroVisible, setIsCadastroVisible] = useState(false);

  const handleLoginClick = () => {
    setIsLoginVisible(true); // Exibe o modal de login
    setIsCadastroVisible(false); // Garante que o cadastro não esteja visível
  };

  const handleCloseModals = () => {
    setIsLoginVisible(false);
    setIsCadastroVisible(false);
  };

  const handleLoginSuccess = (exists) => {
    if (!exists) {
      setIsLoginVisible(false); // Fecha o modal de login
      setIsCadastroVisible(true); // Abre o modal de cadastro
    }
  };

  return (
    <div className="App">
      <Header onLoginClick={handleLoginClick} />
      <Navbar />
      {isLoginVisible && (
        <Login onClose={handleCloseModals} onLogin={handleLoginSuccess} />
      )}
      {isCadastroVisible && (
        <Cadastro onClose={handleCloseModals} />
      )}
      <Catalogo />
    </div>
  );
}

export default App;
