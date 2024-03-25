import { CompleteOrderForm } from './componets/CompleteOrderForm/complete-order-form';
import { CompleteOrderContainer } from './styles';

export function CompleteOrderPage() {
  return (
    <CompleteOrderContainer className='container'>
      <CompleteOrderForm />
    </CompleteOrderContainer>
  );
}
