import styled from 'styled-components';

export const ButtonContainer = styled.button`
  padding: 12px 44.8px;
  color: ${({ theme }) => theme.colors['base-white']};
  background: ${({ theme }) => theme.colors['brand-yellow']};
  font-weight: 700;
  font-size: ${({ theme }) => theme.textSizes['components-button-g']};
  border: none;
  border-radius: 6px;
  text-transform: uppercase;
  transition: 0.4s;
  line-height: 20.8px;
  margin-top: 11.2px;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${({ theme }) => theme.colors['brand-yellow-dark']};
  }
`;
