import React from 'react'
import './App.css'

import Home from './page/home'
import Segment from './page/segment'
import Classify from './page/classify'
import Topic from './page/topic'
import Search from './page/search'
import Contact from './page/contact'

function App() {
  const [page, setPage] = React.useState(0)
  const nextPage = () => {
    setPage(page + 1)
  }
  const prevPage = () => {
    setPage(page - 1)
  }

  return (
    <div className="App">
      {page !== 0 ? <img src="/next.svg" style={backStyle} onClick={prevPage}/> : ''}
      {page === 0 ? <Home nextPage={nextPage} />: ''}
      {page === 1 ? <Classify nextPage={nextPage} />: ''}
      {page === 2 ? <Segment nextPage={nextPage} />: ''}
      {page === 3 ? <Topic nextPage={nextPage} />: ''}
      {page === 4 ? <Search nextPage={nextPage} />: ''}
      {page === 5 ? <Contact />: ''}
    </div>
  );
}

export default App;

const backStyle = {
  transform: "scale(-1, 1)",
  position: 'absolute',
  left: "30px",
  top: "30px",
  width: "32px",
  height: '32px',
}
