import styled from 'styled-components';

export const InputStyleContainer = styled.input`
  height: 42px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors['base-button']};
  background: ${({ theme }) => theme.colors['base-input']};
  transition: 0.4s;
  padding: 0 12px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors['base-text']};

  &:focus {
    border-color: ${({ theme }) => theme.colors['brand-yellow-dark']};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors['base-label']};
  }
`;
