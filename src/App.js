
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import Login from './component/Login';
import Orders from './component/Orders';
import Register from './component/Register';
import Main from './layout/Main';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  const router =createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children:[
        {
          path:'/' ,
          element:<PrivateRoute><Home></Home></PrivateRoute>,
        },
        {
          path:'/orders',
          element:<PrivateRoute> <Orders></Orders></PrivateRoute>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        }
      ]
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
     
    </div>
  );
}

export default App;
