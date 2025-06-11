import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import App from './App.jsx'
import Home from './Home/Home.jsx'
import Users from './Users/Users.jsx'
import DetailedUser from './DetailedUser/DetailedUser.jsx'
import Menu from './Menu/Menu.jsx'

const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: 'users',
        loader: async () => {
                const res = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await res.json();
                return data;
            },
        element: <Users />,
      },
      {
        path: "/users/:id",
        loader: async ({params}) => {
                const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
                const data = await res.json();
                return data;
            },
        element: <DetailedUser />
      },
      {
        path: "/menu",
        element: <Menu />
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route}>
    <App />
    </RouterProvider>
  </StrictMode>,
)
