import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import MenuPage from './Pages/Menu';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const App = () => {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/menu",
        element: <MenuPage />
      }
    ]
  );

  return (
    <>
      <Navbar />
      <main className='d-flex justify-content-center align-items-center flex-column'>
        <RouterProvider router={router} />
      </main>
    </>
  );
}

export default App;
