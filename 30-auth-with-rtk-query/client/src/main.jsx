import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import { BrowserRouter } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import { Provider } from 'react-redux'
import { store } from './app/store'

const GlobalStyle = createGlobalStyle`
  *,
  *::before, 
  *::after {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
  }

  body {
    font-family: BlinkMacSystemFont,-apple-system,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",Helvetica,Arial,sans-serif;
  }
`;

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store} >
      <GlobalStyle />
      <App />
    </Provider>
  </BrowserRouter>,
)
