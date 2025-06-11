import React from 'react';
import logo from '../img/logo.png';
import login from '../img/login.png';
import carrinhoIcon from '../img/carrinho.png';

const Header = ({ onLoginClick, onCarrinhoClick, totalItens }) => {
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
                <img src={login} alt="Login" style={styles.icon} onClick={onLoginClick} />
                <div style={styles.carrinhoWrapper} onClick={onCarrinhoClick}>
                    <img src={carrinhoIcon} alt="Carrinho" style={styles.icon} />
                    {totalItens > 0 && (
                        <span style={styles.badge}>{totalItens}</span>
                    )}
                </div>
            </div>
        </header>
    );
};

const styles = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: 'Playfair Display, serif',
        padding: '20px',
        backgroundColor: 'rgba(254, 251, 251, 0.98)',
        height: '100px',
        borderBottom: '40px solid rgb(49, 3, 114)',
    },
    logoContainer: {
        display: 'flex',
    },
    logo: {
        height: '100px',
    },
    titleContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '5px', // Ajuste para reduzir a distância
        
    },
    title: {
        fontSize: '28px',
        marginBottom: '-10px', // Reduzir a margem inferior
        color: ' rgba(46, 0, 91, 0.99)',
        textShadow: '0 0px 3px rgba(14, 2, 2, 0.45)',
      
    },

    subtitle: {
        fontSize: '20px',
        color: 'rgba(46, 0, 92, 0.99)',
        marginBottom: '10px', // Reduzir a margem inferior
        textShadow: '0 0px 3px rgba(14, 2, 2, 0.45)',
    },
    navContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
    },
    icon: {
        width: '40px',
        height: '40px',
        cursor: 'pointer',
    },
    carrinhoWrapper: {
        position: 'relative',
    },
    badge: {
        position: 'absolute',
        top: '-5px',
        right: '-10px',
        backgroundColor: 'red',
        color: 'white',
        borderRadius: '50%',
        padding: '2px 6px',
        fontSize: '12px',
        fontWeight: 'bold',
    },
};

export default Header;
