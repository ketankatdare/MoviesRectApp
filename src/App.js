import { Route,Routes } from 'react-router-dom';

import AllMoviesPage from './pages/AllMovies';
import NewMoviePage from './pages/NewMovie';
import Layout from './components/ui/Layout';
import MovieDetailsPage from './pages/MovieDetails';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<AllMoviesPage />} />
        <Route path='/new-movie' element={<NewMoviePage />} />
        <Route path='/movie/:movieId' element={<MovieDetailsPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
