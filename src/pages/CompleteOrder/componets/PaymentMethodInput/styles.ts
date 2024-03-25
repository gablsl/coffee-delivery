import styled from 'styled-components';

export const PaymentoMethodInputContainer = styled.div`
  padding: 0 16px;
  background: ${({ theme }) => theme.colors['base-button']};
  color: ${({ theme }) => theme.colors['base-text']};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  font-size: 12px;
  text-transform: uppercase;
  border-radius: 6px;
  height: 48px;
  border: 1px solid ${({ theme }) => theme.colors['base-button']};
  transition: 0.4s;
  user-select: none;

  svg {
    color: ${({ theme }) => theme.colors['brand-purple']};
  }

  &:hover {
    background: ${({ theme }) => theme.colors['base-hover']};
  }
`;
