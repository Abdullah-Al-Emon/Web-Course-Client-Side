import { useContext } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { AuthContext } from './Context/AuthProvider/AuthProvider';
import { routes } from './Routes/routes';

function App() {
  const {darkMode} = useContext(AuthContext)
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
     <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
