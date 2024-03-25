import styled from 'styled-components';

export const CompleteOrderContainer = styled.form`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  gap: 32px;
`;

export const SectionBaseStyle = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors['base-card']};
  border-radius: 6px;
  padding: 40px;
`;
