import styled, { css } from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 104px;
  background: ${({ theme }) => theme.colors['base-background']};
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const HeaderButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

interface HeaderButtonProps {
  variant: 'purple' | 'yellow';
}

export const HeaderButton = styled.button<HeaderButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  min-width: 36.8px;
  min-height: 36.8px;
  border-radius: 6px;
  border: none;
  padding: 0 8px;
  position: relative;
  cursor: inherit;
  font-size: ${({ theme }) => theme.textSizes['text-regular-s']};

  span {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    top: calc(-20px / 2);
    right: calc(-20px / 2);
    color: ${({ theme }) => theme.colors['base-white']};

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 700;
  }

  ${({ variant, theme }) => css`
    background: ${theme.colors[`brand-${variant}-light`]};
    color: ${theme.colors[`brand-${variant}-dark`]};

    span {
      background: ${theme.colors[`brand-${variant}-dark`]};
    }
  `}

  ${({ variant, theme }) =>
    variant === 'purple' &&
    css`
      svg {
        color: ${theme.colors[`brand-purple`]};
      }
    `}
`;
