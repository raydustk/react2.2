import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registro from './components/Registro';
import './index.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Formulario de Registro</h1>
      </header>
      <main>
        <Registro />
      </main>
    </div>
  );
};

export default App;