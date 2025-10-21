import React from 'react';
import Contador from './Components/Contador'; 
import './App.css'; 

function App() {
    return (
        <div className="App">
            <header className="app-header">
                <h1>Leticia Andrade Santos - Turma de Técnico em Informática - 
                  Formatura 2025</h1>
                <p>Contagem regressiva para o grande dia!</p>
            </header>
            <Contador /> 
        </div>
    );
}

export default App;
