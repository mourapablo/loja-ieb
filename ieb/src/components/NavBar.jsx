// src/components/Navbar.jsx
import React, { useState } from 'react';

const Navbar = () => {
    const [hoveredItem, setHoveredItem] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredItem(index);
    };

    const handleMouseLeave = () => {
        setHoveredItem(null);
    };

    return (
        <nav style={styles.navbar}>
            <ul style={styles.navList}>
                {['História', 'Contato', 'Localização'].map((item, index) => (
                    <li
                        key={index}
                        style={{
                            ...styles.navItem,
                            ...(hoveredItem === index ? styles.hovered : {}),
                        }}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%', // Para ocupar toda a largura disponível
        backgroundColor: '#f8f8f8', // Cor de fundo opcional
        padding: '10px 0', // Espaçamento vertical
    },
    navList: {
        listStyleType: 'none', // Remove marcadores da lista
        padding: 0,
        display: 'flex',
        gap: '50px', // Espaçamento entre os itens
    },
    navItem: {
        fontFamily: 'Playfair Display, serif',
        cursor: 'pointer',
        fontSize: '20px',
        color: 'rgba(133, 130, 130, 0.87)',
        textDecoration: 'none', // Remove o sublinhado
        transition: 'transform 0.2s, color 0.2s', // Transição suave para o efeito
    },
    hovered: {
        transform: 'scale(1.1)', // Aumenta o tamanho
        color: 'rgba(228, 6, 6, 0.92)', // Muda a cor para um destaque
    },
};

export default Navbar;
