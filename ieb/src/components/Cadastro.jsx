import React, { useState } from 'react';
import '../Modal.css'; // Importa o CSS para o modal
import logo from '../img/logo.png'; 

const Cadastro = ({ onClose }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');

  const handleCadastro = () => {
    console.log('Cadastro realizado com sucesso!');
    onClose(); // Fecha o modal após cadastro
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3><span className="close" onClick={onClose}>&times;</span>Fechar</h3>
        <h2><img src={logo} alt="Logomarca"  /></h2>
        <input
          type="text"
          placeholder="Nome Completo"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Telefone com DDD"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />
        <input
          type="text"
          placeholder="Endereço"
          value={endereco}
          onChange={(e) => setEndereco(e.target.value)}
        />
        <button onClick={handleCadastro}>Cadastrar</button>
      </div>
    </div>
  );
};

export default Cadastro;
