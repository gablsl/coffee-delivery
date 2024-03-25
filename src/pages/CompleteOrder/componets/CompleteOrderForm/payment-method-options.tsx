import { PaymentoMethodInput } from '../PaymentMethodInput/payment-method-input';
import { PaymentOptionsContainer } from './styles';

export function PaymentMethodOptions() {
  return (
    <PaymentOptionsContainer>
      <PaymentoMethodInput />
      <PaymentoMethodInput />
      <PaymentoMethodInput />
    </PaymentOptionsContainer>
  );
}
