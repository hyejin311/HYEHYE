import React from 'react';
import ReactDOM from 'react-dom/client';

import { FaAngellist } from "react-icons/fa";
import './index.css';

function App(){
  return(
    <article>
      <h3>
      <FaAngellist style={{color:'pink'}}/>
      </h3>
      welcome
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);