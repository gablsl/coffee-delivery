import styled from 'styled-components';

export const CoffeeCartCardContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors['base-button']};
  padding-bottom: 24px;
  margin-bottom: 24px;

  > div {
    display: flex;
    align-items: center;
    gap: 20px;

    img {
      width: 64px;
      height: 64px;
    }
  }
  > p {
    font-weight: 700;
    align-self: flex-start;
  }
`;

export const ActionsContainer = styled.div`
  margin-top: 8px;
  height: 32px;
  display: flex;
  align-items: center;
  gap: 8px;

  > div {
    max-width: 72px;
    height: 100%;
  }
`;

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  color: ${({ theme }) => theme.colors['base-text']};
  font-size: 12px;
  height: 100%;
  border: none;
  text-transform: uppercase;
  background: ${({ theme }) => theme.colors['base-button']};
  position: 0 8px;
  border-radius: 6px;
  transition: 0.4s;

  svg {
    color: ${({ theme }) => theme.colors['brand-purple']};
  }

  &:hover {
    background: ${({ theme }) => theme.colors['base-hover']};
  }
`;
