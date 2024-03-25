import styled from 'styled-components';
import { SectionBaseStyle } from '../../styles';

export const SelectedCoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 640px;
`;

export const DetailsContainer = styled(SectionBaseStyle)`
  border-radius: 6px 44px 6px 44px;
  display: flex;
  flex-direction: column;
`;