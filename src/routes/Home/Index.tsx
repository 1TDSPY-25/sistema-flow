import React, { useState, useEffect } from 'react';

// Dados fictícios para a seção de mais vendidos
const bestSellers = [
  {
    name: 'Produto 1',
    price: 'R$ 100,00',
    image: 'https://via.placeholder.com/150',
    url: 'https://www.example.com/produto-1'
  },
  {
    name: 'Produto 2',
    price: 'R$ 150,00',
    image: 'https://via.placeholder.com/150',
    url: 'https://www.example.com/produto-2'
  },
  {
    name: 'Produto 3',
    price: 'R$ 200,00',
    image: 'https://via.placeholder.com/150',
    url: 'https://www.example.com/produto-3'
  },
  {
    name: 'Produto 4',
    price: 'R$ 250,00',
    image: 'https://via.placeholder.com/150',
    url: 'https://www.example.com/produto-4'
  }
];

// Componente de card de produto
const BestSellerCard: React.FC<{ product: typeof bestSellers[0] }> = ({ product }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', backgroundColor: '#f9f9f9', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', textAlign: 'center' }}>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: '100%', maxHeight: '180px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }}
      />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <a href={product.url} target="_blank" rel="noopener noreferrer" style={{ color: 'blue', textDecoration: 'none' }}>
        Ver produto
      </a>
    </div>
  );
};

// Componente Principal da Rota Home
const Home: React.FC = () => {

  return (
    <div style={{ padding: '20px' }}>
      <h1>Farmacia Flow</h1>
      <p>Uma farmacia familiar que existe desde os anos 90</p>

      {/* Seção de "Mais Vendidos" */}
      <div style={{ marginTop: '40px' }}>
        <h2>Mais Vendidos</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          {bestSellers.map((product, index) => (
            <BestSellerCard key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
