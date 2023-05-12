
import { Routes, Route } from "react-router-dom";
import './scss/app.scss'
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from "./pages/Cart";
import FullPizzas from "./pages/FullPizzas";
import MainLayout from "./components/MainLayout";


function App() {

  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='' element={<Home />} />
        <Route path='*' element={<NotFound />} />
        <Route path='pizzas/:id' element={<FullPizzas />} />
        <Route path='cart' element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default App;
