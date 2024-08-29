import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LayoutProvider from '../layouts/LayoutProvider';

const Home = lazy(() => import('./home/Home'));

const AppRoutes = () => {
  const routes = [
    {
      element: <LayoutProvider />,
      children: [
        {
          path: '/',
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>
          ),
        },
      ],
    },
  ];
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};
export default AppRoutes;
