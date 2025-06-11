import React from 'react';

const Carrinho = ({ carrinho, adicionar, remover, excluir, finalizarCompra }) => {
    const calcularTotal = () => {
        return carrinho.reduce((total, item) => {
            const preco = parseFloat(item.preco.replace('R$', '').replace(',', '.'));
            return total + preco * item.quantidade;
        }, 0).toFixed(2);
    };

    return (
        <div style={styles.container}>
            {carrinho.length === 0 ? (
                <p style={{ textAlign: 'center' }}>Seu carrinho está vazio.</p>
            ) : (
                <>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {carrinho.map(item => (
                            <li key={item.id} style={styles.item}>
                                <img src={item.imagem} alt={item.nome} style={styles.img} />
                                <div style={styles.info}>
                                    <strong>{item.nome}</strong>
                                    <p>{item.preco}</p>
                                    <div style={styles.controles}>
                                        <button   style={{
          backgroundColor: 'rgba(138, 14, 240, 0.06)',
          color: 'black',
          border: 'none',
          padding: '10px 20px',
          textAlign: 'center',
          textDecoration: 'none',
          display: 'inline-block',
          fontSize: '20px',
          margin: '4px 2px',
          cursor: 'pointer',
          borderRadius: '5px',
        }} onClick={() => remover(item.id)}>-</button>
                                        <span style={styles.quantidade}>{item.quantidade}</span>
                                        <button   style={{
          backgroundColor: 'rgba(138, 14, 240, 0.06)',
          color: 'black',
          border: 'none',
          padding: '10px 20px',
          textAlign: 'center',
          textDecoration: 'none',
          display: 'inline-block',
          fontSize: '20px',
          margin: '4px 2px',
          cursor: 'pointer',
          borderRadius: '5px',
        }} onClick={() => adicionar(item)}>+</button>
                                        <button onClick={() => excluir(item.id)} style={styles.remover}>x</button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <p><strong>Total: R$ {calcularTotal()}</strong></p>
                    <button onClick={finalizarCompra} style={styles.finalizar}>Finalizar no WhatsApp</button>
                </>
            )}
        </div>
    );
};

const styles = {
    container: {
        position: 'absolute',
        top: '110px', // abaixo do header
        right: '20px',
        backgroundColor: '#fff',
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '15px',
        width: '250px',
        zIndex: 1000,
        boxShadow: '0 2px 8px',
    },
    item: {
        display: 'flex',
        marginBottom: '10px',
        borderBottom: '1px solid #eee',
        paddingBottom: '10px',
    },
    img: {
        width: '60px',
        height: '60px',
        objectFit: 'contain',
        marginRight: '10px',
    },
    info: {
        flex: 1,
    },
    controles: {
        marginTop: '5px',
        display: 'flex',
        gap: '20px',
        alignItems: 'center',
        
      
    },
    button:{
        backgroundColor:'rgba(232, 8, 8, 0.94)',
    },
    quantidade: {
        margin: '0 5px',
    },
    remover: {
        marginLeft: 'auto',
        background: 'transparent',
        color: 'red',
        border: 'none',
        fontSize: '16px',
        cursor: 'pointer',
    },
    finalizar: {
        marginTop: '15px',
        padding: '10px',
        backgroundColor: '#25D366',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        width: '100%',
    },
};

export default Carrinho;
