import { CompleteOrderForm } from './componets/CompleteOrderForm/complete-order-form';
import { SelectedCoffees } from './componets/SelectedCoffees/selected-coffees';
import { CompleteOrderContainer } from './styles';

export function CompleteOrderPage() {
  return (
    <CompleteOrderContainer className='container'>
      <CompleteOrderForm />
      <SelectedCoffees />
    </CompleteOrderContainer>
  );
}
