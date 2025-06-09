import React, { useState } from 'react';
import '../Modal.css';
import logo from '../img/logo.png';

const Login = ({ onClose, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [forgotPassword, setForgotPassword] = useState(false);
  const [recoveryEmail, setRecoveryEmail] = useState('');
  const [recoveryMessage, setRecoveryMessage] = useState('');

  const handleLogin = () => {
    const registeredEmails = ['user@example.com']; // Exemplo
    if (!registeredEmails.includes(email)) {
      setError('Email não cadastrado. Redirecionando para o cadastro...');
      setTimeout(() => {
        onLogin(false);
      }, 2000);
    } else {
      console.log('Login realizado com sucesso!');
      onClose();
    }
  };

  const handlePasswordReset = () => {
    const registeredEmails = ['user@example.com'];
    if (!registeredEmails.includes(recoveryEmail)) {
      setRecoveryMessage('Email não encontrado.');
    } else {
      setRecoveryMessage('Link de redefinição de senha enviado para o seu email.');
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>
          <span className="close" onClick={onClose}>&times;</span>Fechar
        </h3>
        <h2><img src={logo} alt="Logomarca" /></h2>

        {!forgotPassword ? (
          <>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Entrar</button>
            <p className="forgot-password" onClick={() => setForgotPassword(true)} style={{ cursor: 'pointer', color: 'blue', marginTop: '10px' }}>
              Esqueceu a senha?
            </p>
            {error && <p>{error}</p>}
          </>
        ) : (
          <>
            <p>Digite seu email cadastrado para redefinir a senha:</p>
            <input
              type="email"
              placeholder="Seu email"
              value={recoveryEmail}
              onChange={(e) => setRecoveryEmail(e.target.value)}
            />
            <button onClick={handlePasswordReset}>Enviar link</button>
            {recoveryMessage && <p>{recoveryMessage}</p>}
            <p onClick={() => setForgotPassword(false)} style={{ cursor: 'pointer', color: 'blue', marginTop: '10px' }}>
              Voltar ao login
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
