
import { createRoot } from 'react-dom/client'
import App from './App'
import { store } from './redux/store'

import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router'

createRoot(document.getElementById('root')).render(
  <>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </>,
)
