import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from "react-router-dom";
import AppRouter from './app/AppRouter';


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>,
    document.body.appendChild(document.createElement('div')),
  )
})
