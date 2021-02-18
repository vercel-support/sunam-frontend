import styled from 'styled-components';
import { Font } from '@/components/atoms';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: left;
  padding-top: 5rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled(Font)`
  font-size: 4rem;
  font-weight: 700;
  color: black;

  @media (max-width: ${props => props.theme.size.mobile}) {
    font-size: 2rem;
  }
`;

export const SubTitle = styled(Font)`
  font-size: 2.5rem;
  font-weight: 300;
  color: #6b7280;
  @media (max-width: ${props => props.theme.size.mobile}) {
    font-size: 1rem;
  }
`;
