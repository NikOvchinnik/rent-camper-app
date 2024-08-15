import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const FavouritesPage = lazy(() =>
  import('./pages/FavoritesPage/FavoritesPage')
);
const CatalogPage = lazy(() => import('./pages/CatalogPage/CatalogPage'));

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavouritesPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Layout>
  );
};

export default App;
