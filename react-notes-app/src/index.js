import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const notes = [
  {
    content: "Learn NodeJS",
    title:  "Learn Node",
  },
  {
    content: "Learn React framework",
    title:  "Learn React",
  },
  {
    content: "Get a high-paying job",
    title:  "Get hired",
  },
]

ReactDOM.render(
  <React.StrictMode>
    <App notes={notes} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
