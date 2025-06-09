import React from 'react';

const BarraPesquisa = ({ onClose }) => {
    return (
        <div style={styles.searchContainer}>
            <input type="text" placeholder="Buscar..." style={styles.input} />
            <button onClick={onClose} style={styles.closeButton}>Fechar</button>
        </div>
    );
};

const styles = {
    searchContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    input: {
        padding: '10px',
        fontSize: '16px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginRight: '5px',
    },
    closeButton: {
        padding: '10px',
        cursor: 'pointer',
    },
};

export default BarraPesquisa;
