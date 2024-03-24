import styled from 'styled-components';

export const InfoWithIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

interface IconContainerProps {
  iconBg: string;
}

export const IconContainer = styled.div<IconContainerProps>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({ iconBg }) => iconBg};
  color: ${({ theme }) => theme.colors['base-white']};
  display: flex;
  align-items: center;
  justify-content: center;
`;
