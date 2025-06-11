import React, { useState } from 'react';
import Carrinho from './Carrinho';

// Dados dos produtos
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

const Catalogo = ({ mostrarCarrinho, onToggleCarrinho, totalItens, onAtualizarTotal }) => {
  const [carrinho, setCarrinho] = useState([]);

  const produtos = produtosData.map((produto, index) => ({
    id: index + 1,
    nome: produto.nome,
    preco: produto.preco,
    imagem: require(`../img/${produto.imagem}`),
  }));

  const adicionarAoCarrinho = (produto) => {
    setCarrinho(prev => {
      const itemExistente = prev.find(item => item.id === produto.id);
      const novoCarrinho = itemExistente
        ? prev.map(item =>
            item.id === produto.id
              ? { ...item, quantidade: item.quantidade + 1 }
              : item
          )
        : [...prev, { ...produto, quantidade: 1 }];

      onAtualizarTotal(novoCarrinho.reduce((soma, item) => soma + item.quantidade, 0));
      return novoCarrinho;
    });
  };

  const remover = (id) => {
    setCarrinho(prev => {
      const novoCarrinho = prev
        .map(item =>
          item.id === id ? { ...item, quantidade: item.quantidade - 1 } : item
        )
        .filter(item => item.quantidade > 0);

      onAtualizarTotal(novoCarrinho.reduce((soma, item) => soma + item.quantidade, 0));
      return novoCarrinho;
    });
  };

  const excluir = (id) => {
    setCarrinho(prev => {
      const novoCarrinho = prev.filter(item => item.id !== id);
      onAtualizarTotal(novoCarrinho.reduce((soma, item) => soma + item.quantidade, 0));
      return novoCarrinho;
    });
  };

  const finalizarCompra = () => {
    if (carrinho.length === 0) return;
    const mensagem = carrinho.map(item =>
      `${item.nome} - ${item.quantidade}x (${item.preco})`
    ).join('\n');
    const total = carrinho.reduce((total, item) => {
      const preco = parseFloat(item.preco.replace('R$', '').replace(',', '.'));
      return total + preco * item.quantidade;
    }, 0).toFixed(2);

    const texto = `Olá! Gostaria de fazer um pedido:\n\n${mensagem}\n\nTotal: R$ ${total}`;
    const url = `https://wa.me/5581988028672?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
  };

  return (
    <div style={styles.catalogo}>
      <div style={styles.listaProdutos}>
        {produtos.map(produto => (
          <div key={produto.id} style={styles.card}>
            <img src={produto.imagem} alt={produto.nome} style={styles.imagem} />
            <h2 style={styles.nome}>{produto.nome}</h2>
            <p style={styles.preco}>{produto.preco}</p>
            <button style={styles.botao} onClick={() => adicionarAoCarrinho(produto)}>Comprar</button>
          </div>
        ))}
      </div>

      {mostrarCarrinho && (
        <Carrinho
          carrinho={carrinho}
          adicionar={adicionarAoCarrinho}
          remover={remover}
          excluir={excluir}
          finalizarCompra={finalizarCompra}
        />
      )}
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
    justifyContent: 'center',
    flexWrap: 'wrap',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  card: {
    border: '1px solid rgba(107, 12, 240, 0.18)',
    borderRadius: '5px',
    padding: '10px',
    margin: '20px',
    width: '220px',
    boxShadow: '0 1px 1px rgb(221, 0, 0)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '300px',
  },
  imagem: {
    width: '100%',
    height: '150px',
    objectFit: 'contain',
    borderRadius: '5px',
  },
  nome: {
    fontSize: '18px',
    color: '#333',
    margin: '10px 0',
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
};

export default Catalogo;
