import styled from 'styled-components';
import { Button, Font } from '@/components/atoms';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  border-width: 0.1rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  margin-top: 4.5rem;
  padding: 1rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const NextButton = styled(Button)`
  width: 200px;
  height: 40px;
  border-radius: 0.375rem;
  background: #2563eb;
  color: white;
  border: 0;
  outline: 0;
`;

export const BackButton = styled(Button)`
  width: 200px;
  height: 40px;
  background: ${props => (props.disabled ? '#cccccc' : '#2563eb')}
  color: white;
  border: 0.1rem;
  border-style: solid;
  border-color: #cccccc;
  border-radius: 0.375rem;
  outline: 0;
`;

export const ButtonFont = styled(Font)`
  font-weight: 500;
  font-size: 1rem;
  line-height: 0.875rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
  flex-wrap: wrap;
`;
