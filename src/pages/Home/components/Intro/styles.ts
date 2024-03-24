import styled from 'styled-components';
import introBackground from '../../../../assets/intro-background.png';
import { rgba } from 'polished';
import { TitleText } from '../../../../components/Typography';

export const IntroContainer = styled.section`
  width: 100%;
  height: 560px;
  background: ${({ theme }) => `url(${introBackground}) no-repeat center,
      linear-gradient(
        0deg,
        ${theme.colors['base-white']} 0%,
        ${rgba(theme.colors['base-background'], 0.2)} 50%,
        ${theme.colors['base-background']} 100%
      )`};
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IntroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 56px;
`;

export const IntroTitle = styled(TitleText)`
  margin-bottom: 16px;
`;

export const BenefitsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 20px;
  margin-top: 66px;
`;
