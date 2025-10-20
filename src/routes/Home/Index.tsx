import React, { useState, useEffect } from 'react';
import type { Article, NewsApiResponse } from '../../types/types'; 


// Chave da API e URL (SUA CHAVE)
// ATENÇÃO: Nunca exponha chaves de API em código de produção real.
// Para este exercício, vamos usá-la diretamente.
const API_KEY = 'B8B89356F4DD44DBA2879392D85E6962B'; 
const API_URL = `https://newsapi.org/v2/top-headlines?country=br&pageSize=10&apiKey=${API_KEY}`;


// --- Componente de Cartão de Notícia (Card) ---
// Usa a interface Article definida em types/types.ts
const NewsCard: React.FC<{ article: Article }> = ({ article }) => {
  return (
    // Card simples sem Tailwind, apenas estilos inline básicos
    <div style={{
      border: '1px solid #ccc',
      padding: '15px',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9',
      marginBottom: '20px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      {/* Imagem, com fallback caso a URL seja nula */}
      {article.urlToImage && (
        <img 
          src={article.urlToImage} 
          alt={article.title || 'Imagem da notícia'} 
          style={{ width: '100%', maxHeight: '180px', objectFit: 'cover', marginBottom: '10px', borderRadius: '4px' }}
          // Fallback simples para caso a imagem não carregue
          onError={(e) => {
            (e.target as HTMLImageElement).onerror = null; 
            (e.target as HTMLImageElement).style.display = 'none'; 
          }}
        />
      )}
      
      <h2 style={{ fontSize: '1.25em', fontWeight: 'bold', marginBottom: '8px' }}>
        {article.title}
      </h2>
      
      <p style={{ fontSize: '0.9em', color: '#555', marginBottom: '10px' }}>
        {article.description || 'Nenhuma descrição disponível.'}
      </p>

      {article.url && (
        <a 
          href={article.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ 
            color: 'blue', 
            textDecoration: 'none',
            fontSize: '0.9em',
            display: 'inline-block',
            marginTop: '5px'
          }}
        >
          Leia mais &gt;
        </a>
      )}
    </div>
  );
};


// --- Componente Principal da Rota Home (News Feed) ---
const Home: React.FC = () => {
  const [news, setNews] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Hook para buscar dados da API
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(API_URL);
        
        // Verifica se a resposta foi bem-sucedida
        if (!response.ok) {
          throw new Error(`Erro de API: ${response.statusText}`);
        }
        
        const data: NewsApiResponse = await response.json();
        
        if (data.status === 'ok') {
          // Filtra artigos que possuem título para garantir um mínimo de conteúdo
          const validArticles = data.articles.filter(article => article.title);
          setNews(validArticles);
        } else {
          throw new Error(`Erro na resposta da API: ${data.code}`);
        }

      } catch (err) {
        console.error("Erro ao buscar notícias:", err);
        setError("Não foi possível carregar as notícias. Tente novamente mais tarde.");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []); // O array vazio garante que o efeito rode apenas na montagem

  // --- Renderização Condicional ---

  if (loading) {
    return <div style={{ textAlign: 'center', padding: '50px' }}>Carregando notícias...</div>;
  }

  if (error) {
    return <div style={{ textAlign: 'center', color: 'red', padding: '50px' }}>Erro: {error}</div>;
  }

  if (news.length === 0) {
    return <div style={{ textAlign: 'center', padding: '50px' }}>Nenhuma notícia encontrada.</div>;
  }
  
  // --- Renderização do Feed ---
  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ fontSize: '2em', marginBottom: '20px', borderBottom: '2px solid #333' }}>
        Manchetes do Brasil
      </h1>
      
      {/* Grid simples para exibir os cartões lado a lado em telas maiores */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        {news.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>
    </div>
  );
};

export default Home;
