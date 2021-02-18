import styled from 'styled-components';
import { Font } from '@/components/atoms';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  width: 100%;
`;

export const Title = styled.div``;

export const TitleFont = styled(Font)`
  font-size: 1.25rem;
  text-align: left;
  font-weight: 600;
  color: #6b7280;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.25rem 0 1.25rem 0;
`;

export const Notice = styled.div``;

export const NoticeFont = styled(Font)`
  font-size: 1rem;
  text-align: left;
  font-weight: 500;
  color: black;
`;
