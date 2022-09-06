import React from 'react'
import './App.css'
import Home from './page/home';

function App() {
  const [page, setPage] = React.useState(0)

  return (
    <div className="App">
      {page === 0 ? <Home/>: ''}
    </div>
  );
}

export default App;
