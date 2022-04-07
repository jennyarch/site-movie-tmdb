import  { GlobalStyle } from './components/GlobalStyle';
import Home from './pages/Home';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom'; 
import Detalhes from './pages/Detalhes';
import Crew from './components/Detalhes/Crew';
import Cast from './components/Detalhes/Cast';
import Trailer from './components/Detalhes/Trailer';
import Recomendations from './components/Detalhes/Recomendations';


const Aplicativo = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/:id", element: <Home /> },
    { path: "/Detalhes/:id", element: <Detalhes /> },
    { path: "/Crew/:id", element: <Crew /> },
    { path: "/Cast/:id", element: <Cast /> },
    { path: "/Trailer/:id", element: <Trailer /> },
    { path: "/Recomendations/:id", element: <Recomendations /> },
    
    
    // ...
  ]);
  return routes;
};


function App() {
  return (
    <>
      <GlobalStyle />

      <Router>
       <Aplicativo />
      </Router>
      
    </>
    
  );
}

export default App;