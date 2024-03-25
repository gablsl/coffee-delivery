import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/Home/home';
import { CompleteOrderPage } from './pages/CompleteOrder/complete-order';
import { DefaultLayout } from './layouts/DefaultLayout/layout';
import { OrderConfirmedPage } from './pages/OrderConfirmed/order-confirmed';

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/completeOrder' element={<CompleteOrderPage />} />
        <Route path='/orderConfirmed' element={<OrderConfirmedPage />} />
      </Route>
    </Routes>
  );
}
