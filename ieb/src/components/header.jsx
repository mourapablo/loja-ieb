import React from 'react';
import logo from '../img/logo.png'; // Substitua pelo caminho da sua logomarca
import login from '../img/login.png';
import carrinho from '../img/carrinho.png';
import '../App.css';

const Header = ({ onLoginClick }) => {
    return (
        <header style={styles.header}>
            <div style={styles.logoContainer}>
                <img src={logo} alt="Logomarca" style={styles.logo} />
            </div>
            <div style={styles.titleContainer}>
                <h1 style={styles.title}>IGREJA EVANGÉLICA</h1>
                <h3 style={styles.subtitle}>BATISTA NO CORDEIRO</h3>
            </div>
            <div style={styles.navContainer}>
                <img 
                    src={login} 
                    alt="Login" 
                    style={styles.icon} 
                    onClick={onLoginClick} // Chama a função ao clicar
                />
                <img src={carrinho} alt="Carrinho de compra" style={styles.icon} />
            </div>
        </header>
    );
};

const styles = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: 'rgba(254, 251, 251, 0.98)',
        boxShadow: '0 2px 50px rgba(14, 2, 2, 0.45)',
        height: '100px',
        borderBottom: '40px solid rgb(49, 3, 114)',
        flexWrap: 'nowrap', // Impede a quebra de linha
    },
    logoContainer: {
        flex: '0 0 auto',
        display: 'flex',
        justifyContent: 'flex-start',
        marginRight: '20px',
    },
    logo: {
        height: '100px',
    },
    titleContainer: {
        display: 'flex',
        flexDirection: 'column', // Coloca o h3 embaixo do h1
        alignItems: 'center', // Centraliza o texto
    },
    title: {
        fontFamily: 'Playfair Display, serif',
        fontSize: '29px',
        color: '#333',
        margin: '0',
        textShadow: '1px 1px 1px rgba(0, 0, 0, 0.3)',
    },
    subtitle: {
        fontFamily: 'Playfair Display, serif',
        fontSize: '18px',
        color: '#333',
        margin: '5px 0 0 0',
        textShadow: '1px 1px 1px rgba(0, 0, 0, 0.2)',
    },
    navContainer: {
        display: 'flex',
        gap: '15px',
        alignItems: 'center',
        flex: '0 0 auto',
    },
    icon: {
        width: '40px',
        height: '40px',
        cursor: 'pointer',
    },
};

export default Header;
