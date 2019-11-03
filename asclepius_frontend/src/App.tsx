import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchForm from './SearchForm';
import ResultData from './ResultData';

const App: React.FC = () => {
  return (
    <div className="App">
        <header className="App-header">
          <h1>Rapilytics</h1>
          <h2>Team Asclepius</h2>
        </header>
        <SearchForm />
        <ResultData />
      </div>
  );
}

export default App;
