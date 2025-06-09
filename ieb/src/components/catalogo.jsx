import React, { useState } from 'react';

const produtosData = [
    { nome: 'Agenda Biblíca', imagem: 'agenda.png', preco: 'R$29,90' },
    { nome: 'Biblía Infantil', imagem: 'biblia.png', preco: 'R$69,90' },
    { nome: 'Bolsa de Passeio', imagem: 'bolsa.png', preco: 'R$29,90' },
    { nome: 'Boné Cristão', imagem: 'bone.png', preco: 'R$49,90' },
    { nome: 'Camisa Mensagem', imagem: 'camisa.png', preco: 'R$49,90' },
    { nome: 'Caneca Nordestina', imagem: 'caneca.png', preco: 'R$39,90' },
    { nome: 'Caneta', imagem: 'caneta.png', preco: 'R$9,90' },
    { nome: 'Chaveiro', imagem: 'chaveiro.png', preco: 'R$19,90' },
    { nome: 'Copo Térmico', imagem: 'copo.png', preco: 'R$79,90' },
    { nome: 'Garrafa Térmica', imagem: 'garrafa.png', preco: 'R$59,90' },
    { nome: 'Mouse Pad', imagem: 'mousePad.png', preco: 'R$29,90' },
    { nome: 'Necessaire Cristã', imagem: 'necessaire.png', preco: 'R$39,90' },
    { nome: 'Pulseira Jesus', imagem: 'pulseira.png', preco: 'R$29,90' },
    { nome: 'Quadro Graça', imagem: 'quadro.png', preco: 'R$69,90' },
    { nome: 'Relógio de parede', imagem: 'relogio.png', preco: 'R$49,90' },
    { nome: 'Sandália Cruz', imagem: 'sandalia.png', preco: 'R$89,90' },
];

const produtos = produtosData.map((produto, index) => ({
    id: index + 1,
    nome: produto.nome,
    preco: produto.preco,
    imagem: require(`../img/${produto.imagem}`),
}));

const Catalogo = () => {
    const [hoveredCardId, setHoveredCardId] = useState(null);

    return (
        <div style={styles.catalogo}>
            <div style={styles.listaProdutos}>
                {produtos.map((produto) => (
                    <div 
                        key={produto.id} 
                        style={{
                            ...styles.card,
                            ...(hoveredCardId === produto.id ? styles.cardHover : {})
                        }}
                        onMouseEnter={() => setHoveredCardId(produto.id)}
                        onMouseLeave={() => setHoveredCardId(null)}
                    >
                        <div style={styles.fundoImagem}>
                            <img src={produto.imagem} alt={produto.nome} style={styles.imagem} />
                        </div>
                        <h2 style={styles.nome}>{produto.nome}</h2>
                        <p style={styles.preco}>{produto.preco}</p>
                        <button style={styles.botao}>Comprar</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles = {
    catalogo: {
        padding: '20px',
        textAlign: 'center',
        backgroundColor: 'rgb(253, 255, 253)',
    },
    listaProdutos: {
        display: 'flex',
        justifyContent: 'center', // Centraliza os cards
        flexWrap: 'wrap',
        maxWidth: '1200px',
        margin: '0 auto',
    },
    card: {
        border: '1px solid rgba(107, 12, 240, 0.18)',
        borderRadius: '5px',
        padding: '10px',
        margin: '29px',
        width: '220px',
        boxShadow: '0 1px 1px rgb(221, 0, 0)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '300px',
        position: 'relative',
        overflow: 'hidden',
        transition: 'transform 0.2s, box-shadow 0.2s',
        cursor: 'pointer',
    },
    cardHover: {
        transform: 'scale(1.05)',
        boxShadow: '0 4px 15px rgb(49, 4, 251)',
    },
    nome: {
        fontSize: '18px',
        color: '#333',
        margin: '10px 0',
    },
    imagem: {
        width: '100%',
        height: '150px',
        objectFit: 'contain',
        borderRadius: '5px',
    },
    preco: {
        fontWeight: 'bold',
        color: '#003366',
        fontSize: '20px',
        margin: '5px 0',
    },
    botao: {
        backgroundColor: 'rgb(3, 17, 55)',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        padding: '10px',
        cursor: 'pointer',
        fontSize: '16px',
        width: '100%',
        marginTop: 'auto',
    },
    // Estilos responsivos
    '@media (max-width: 1200px)': {
        card: {
            width: '180px',
        },
    },
    '@media (max-width: 768px)': {
        card: {
            width: '150px',
            height: '250px',
        },
        nome: {
            fontSize: '16px',
        },
        preco: {
            fontSize: '18px',
        },
        botao: {
            fontSize: '14px',
        },
    },
    '@media (max-width: 480px)': {
        catalogo: {
            padding: '10px',
        },
        listaProdutos: {
            flexDirection: 'column',
            alignItems: 'center',
        },
        card: {
            width: '100%',
            margin: '5px 0',
            height: 'auto',
        },
        nome: {
            fontSize: '14px',
        },
        preco: {
            fontSize: '16px',
        },
        botao: {
            fontSize: '12px',
        },
    },
};

export default Catalogo;
