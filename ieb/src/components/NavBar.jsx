import React, { useState, useEffect, useRef } from 'react';
import { FaPhone, FaEnvelope, FaInstagram } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [hoveredItem, setHoveredItem] = useState(null);
    const [activeContent, setActiveContent] = useState(null);
    const contentRef = useRef();

    const menuItems = [
        { label: 'História', key: 'historia' },
        { label: 'Contato', key: 'contato' },
        { label: 'Localização', key: 'localizacao' },
    ];

    const handleClick = (key) => {
        if (activeContent === key) {
            setActiveContent(null);
            window.scrollTo(0, 0);
        } else {
            setActiveContent(key);
        }
    };

    const handleClickOutside = (event) => {
        if (contentRef.current && !contentRef.current.contains(event.target)) {
            setActiveContent(null);
            window.scrollTo(0, 0);
        }
    };

    useEffect(() => {
        if (activeContent) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [activeContent]);

    const handleClose = () => {
    setActiveContent(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

    const renderContent = () => {
        switch (activeContent) {
          case 'historia':
    return (
        <div style={styles.historyContainer}>
            <h2 style={styles.historyTitle}>Nossa História</h2>
            <p style={styles.historyText}>
                A <strong>Loja IEB</strong> foi criada com um propósito especial: arrecadar recursos que serão integralmente destinados à construção do novo templo da <strong>Igreja Evangélica Brasileira</strong>.
            </p>
            <p style={styles.historyText}>
                Desde o início de 2025, temos trabalhado com dedicação, oferecendo produtos que refletem nossa fé e missão, sempre com o objetivo maior de servir à comunidade e glorificar a Deus por meio de cada detalhe.
            </p>
            <p style={styles.historyText}>
                Cada compra feita em nossa loja é uma semente plantada na obra do Senhor. Obrigado por fazer parte dessa história conosco!
            </p>
            <button style={styles.closeButton} onClick={handleClose}>
                Fechar
            </button>
        </div>
    );


            case 'contato':
    return (
        <div style={styles.historyContainer}>
            <h2 style={styles.historyTitle}>Fale Conosco</h2>
            <div style={styles.contactItem}>
                <FaPhone style={styles.icon} />
                <span style={styles.historyText}>+55 11 91234-5678</span>
            </div>
            <div style={styles.contactItem}>
                <FaEnvelope style={styles.icon} />
                <span style={styles.historyText}>contato@igrejaieb.com</span>
            </div>
            <div style={styles.contactItem}>
                <FaInstagram style={styles.icon} />
                <span style={styles.historyText}>@igrejaieb</span>
            </div>
            <button style={styles.closeButton} onClick={handleClose}>
                Fechar
            </button>
        </div>
    );

          case 'localizacao':
    return (
        <div style={styles.historyContainer}>
            <h2 style={styles.historyTitle}>Localização</h2>
            <p style={styles.historyText}>
                Estamos localizados na <strong>Rua Áureo Xavier, 160 - Cordeiro, Recife - PE</strong>.
            </p>
            <p style={styles.historyText}>
                <a 
                    href="https://maps.app.goo.gl/ha3cW971JXCGVMhL7" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: '#8B0000', textDecoration: 'underline' }}
                >
                    Ver no Google Maps
                </a>
            </p>
            <button style={styles.closeButton} onClick={handleClose}>
                Fechar
            </button>
        </div>
    );


            default:
                return null;
        }
    };

    return (
        <div>
            <nav style={styles.navbar}>
                <ul style={styles.navList}>
                    {menuItems.map((item, index) => (
                        <li
                            key={item.key}
                            style={{
                                ...styles.navItem,
                                ...(hoveredItem === index ? styles.hovered : {}),
                            }}
                            onMouseEnter={() => setHoveredItem(index)}
                            onMouseLeave={() => setHoveredItem(null)}
                            onClick={() => handleClick(item.key)}
                        >
                            {item.label}
                        </li>
                    ))}
                </ul>
            </nav>

            <AnimatePresence>
                {activeContent && (
                    <motion.div
                        ref={contentRef}
                        style={styles.card}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 30 }}
                        transition={{ duration: 0.4 }}
                    >
                        {renderContent()}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: '#f8f8f8',
        padding: '10px 0',
    },
    navList: {
        listStyleType: 'none',
        padding: 0,
        display: 'flex',
        gap: '50px',
    },
    navItem: {
        fontFamily: 'Playfair Display, serif',
        cursor: 'pointer',
        fontSize: '20px',
        color: 'rgba(133, 130, 130, 0.87)',
        textDecoration: 'none',
        transition: 'transform 0.2s, color 0.2s',
    },
    hovered: {
        transform: 'scale(1.1)',
        color: ' rgba(169, 168, 170, 0.99)',
    },
    card: {
        margin: '30px auto',
        padding: '20px',
        maxWidth: '600px',
        borderRadius: '16px',
        backgroundColor: '#ffffff',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        fontSize: '18px',
        textAlign: 'center',
    },
    contactItem: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '10px 0',
    },
    icon: {
        marginRight: '8px',
    },
    mapContainer: {
        marginTop: '15px',
    },
historyContainer: {
    fontFamily: "'Playfair Display', serif",
    textAlign: 'center',
    padding: '20px',
    lineHeight: '1.8',
},

historyTitle: {
    fontSize: '28px',
    marginBottom: '15px',
    color: '#8B0000',
},

historyText: {
    fontSize: '18px',
    color: '#333',
    marginBottom: '15px',
},
closeButton: {
    width: '30%',
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '20px',
    fontFamily: "'Playfair Display', serif",
    backgroundColor: '#8B0000',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 2s ease',
},
':hover': {
    backgroundColor: '#a10000',
},


};

export default Navbar;
