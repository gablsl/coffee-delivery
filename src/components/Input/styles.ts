import styled, { css } from 'styled-components';

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.8px;
  position: relative;

  > p {
    color: ${({ theme }) => theme.colors['base-error']};
  }
`;

interface InputStyleContainerProps {
  hasError: boolean;
}

export const InputStyleContainer = styled.div<InputStyleContainerProps>`
  height: 42px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors['base-button']};
  background: ${({ theme }) => theme.colors['base-input']};
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 0.4s;
  overflow: hidden;

  &:focus-within {
    border-color: ${({ theme }) => theme.colors['brand-yellow-dark']};
  }

  ${({ theme, hasError }) =>
    hasError &&
    css`
      border-color: ${theme.colors['base-error']};
    `}
`;

export const InputStyled = styled.input`
  flex: 1;
  height: 100%;
  background: none;
  border: none;
  padding: 0 12px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors['base-text']};

  &::placeholder {
    color: ${({ theme }) => theme.colors['base-label']};
  }
`;

export const RightText = styled.p`
  font-size: 12px;
  margin-right: 12px;
  font-style: italic;
  color: ${({ theme }) => theme.colors['base-label']};
`;
