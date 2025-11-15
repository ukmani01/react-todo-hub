import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TodoProvider, TodoContext } from "../src/assets/components/TodoContext";
import { ThemeProvider } from './assets/components/ThemeContext.jsx';

createRoot(document.getElementById('root')).render(

  <ThemeProvider>
    <TodoProvider>

      <StrictMode>
        <App />
      </StrictMode>
    </TodoProvider>
  </ThemeProvider>

)
