import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/home/home';
import ComoFunciona from '../pages/comoFunciona/comoFunciona';

export const Routers = () => {
    return (
      <BrowserRouter>
          <Routes>
              <Route path="/" Component={Home}></Route>
              <Route path="/como-funciona" Component={ComoFunciona}></Route>
          </Routes>
      </BrowserRouter>
    );
  }