import { createBrowserRouter } from 'react-router-dom'
import Search from '../../pages/Search/Search';
import Movie from '../../pages/Movie/Movie';

const router = createBrowserRouter([
    {
      path: '/',
      element: <Search/>
    },
    {
      path: '/movie/:id',
      element: <Movie />
    }
  ])

export default router;
