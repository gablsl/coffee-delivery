import styled from 'styled-components';
import { SectionBaseStyle } from '../../styles';

export const CompleteOrderFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 640px;
`;

export const FormSectionContainer = styled(SectionBaseStyle)`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const AddressFormContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 200px 276px 60px;
  column-gap: 12px;
  row-gap: 16px;
  grid-auto-flow: dense;

  .cep {
    grid-column: span 3;
    max-width: 200px;
  }

  .street {
    grid-column: span 3;
  }

  .complement {
    grid-column: span 2;
  }
`;

export const PaymentOptionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 12px;

  > p {
    grid-column: span 3;
    color: ${({ theme }) => theme.colors['base-error']};
  }
`;
