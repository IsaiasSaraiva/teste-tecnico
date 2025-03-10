import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Demos from './Pages/Demos/Demos';
import AtualizarDemo from "./Pages/AtualizarDemo/AtualizarDemo"
import Sobre from './Pages/Sobre/Sobre';

const router = createBrowserRouter([
  {
    //Página que contém a DEMO cadastrada com opção de visualizar os frames da DEMO
    path: '/',
    element: <Demos />,
  },
  {
    //Rota de edição do frame da DEMO
    path: '/atualizar-demo/:frameId',
    element: <AtualizarDemo/>
  },
  {
    //Rota de uma página chamada sobre que contempla as informações utilizadas no projeto
    path: '/sobre',
    element: <Sobre/>
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
