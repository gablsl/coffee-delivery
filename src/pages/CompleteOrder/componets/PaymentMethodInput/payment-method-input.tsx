import { ContentContainer, PaymentoMethodInputContainer } from './styles';
import { forwardRef, InputHTMLAttributes, ReactNode } from 'react';

type PaymentoMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode;
  label: string;
};

export const PaymentMethodInput = forwardRef<
  HTMLInputElement,
  PaymentoMethodInputProps
>(({ id, icon, label, ...props }, ref) => {
  return (
    <PaymentoMethodInputContainer>
      <input id={id} type='radio' {...props} name='paymentMethod' ref={ref} />
      <label htmlFor={id}>
        <ContentContainer>
          {icon}
          {label}
        </ContentContainer>
      </label>
    </PaymentoMethodInputContainer>
  );
});
