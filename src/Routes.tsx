import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/Home/home';
import { CompleteOrderPage } from './pages/CompleteOrder/complete-order';

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/completeOrder' element={<CompleteOrderPage />} />
    </Routes>
  );
}
