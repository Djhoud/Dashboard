import React from 'react';
import '../styles/Hero.css';

const Hero: React.FC = () => {
    return (
        <div className="hero-container">
            <div className="hero-title">
                <h1 className="hero-heading">
                    Gerenciador de Orçamento Pessoal
                </h1>
            </div>
            <div className="hero-description">
                <p>
                    "Gerenciador de Orçamento Pessoal" é uma aplicação web que permite aos usuários gerenciar sua renda e despesas mensais. Os usuários podem adicionar, editar e excluir entradas de renda e despesas, e o aplicativo exibirá um resumo do total de renda, total de despesas e o saldo restante.
                </p>
            </div>
        </div>
    );
};

export default Hero;
