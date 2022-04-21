import React from 'react';
import ReactDOM from 'react-dom/client';

//source
import './index.css';
import {FaAngellist} from "react-icons/fa"

//component
import AddApointment from './components/AddApointment';
import Search from './components/Search';

function App(){
  return(
    <article>
      <h3>
      <FaAngellist style={{color:'pink'}} /> 
      예약 시스템
      </h3>
<AddApointment />
<Search />
<div id="list">
  <ul>
    <li>반복문</li>
  </ul>
</div>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);