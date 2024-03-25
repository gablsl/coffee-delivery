import { CreditCard } from 'phosphor-react';
import { PaymentoMethodInputContainer } from './styles';

export function PaymentoMethodInput() {
  return (
    <PaymentoMethodInputContainer>
      <CreditCard size={16} />
      Cartão de crédito
    </PaymentoMethodInputContainer>
  );
}
