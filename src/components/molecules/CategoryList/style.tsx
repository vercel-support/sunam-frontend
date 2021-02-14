import styled from 'styled-components';
import { Button, Font } from '@/components/atoms';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`;

export const Inner = styled.div`
  display: flex;
  margin: 3rem 0 3rem 0;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  display: inline;
  margin: 0.5rem;
`;

export const ItemFont = styled(Font)`
  font-size: 1.125rem;
  line-height: 1.5rem;
`;

export const CategoryButton = styled(Button)`
  width: 160px;
  height: 40px;
  background-color: ${props => (props.isSelected ? 'white' : '#3178C6')};
  color: ${props => (props.isSelected ? '#6b7280' : 'white')};
  border: ${props => (props.isSelected ? 'solid' : '0')};
  border-width: 0.1rem;
  border-style: solid;
  border-radius: 0.375rem;
  outline: 0;
  transition-duration: 250ms;
`;
