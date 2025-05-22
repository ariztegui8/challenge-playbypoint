import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom';
import { FavoritesProvider } from './contexts/favorites/FavoritesProvider';
import { FiltersProvider } from './contexts/filters/FiltersProvider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <FavoritesProvider>
        <FiltersProvider>
          <App />
        </FiltersProvider>
      </FavoritesProvider>
    </BrowserRouter>
  </StrictMode>,
)
