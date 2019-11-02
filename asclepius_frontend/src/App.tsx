import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Description from './Description';
import Header from './Header';
import SearchForm from './SearchForm';

const App: React.FC = () => {
  return (
    <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <SearchForm />
      </div>
  );
}

export default App;
