import styled from 'styled-components';
import { Link } from '@/components/atoms';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  min-height: 64px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-width: 63.33vw;
`;

export const Home = styled(Link)`
  color: #6b7280;
  font-weight: 600;
  font-size: 0.875rem;
  letter-spacing: 2px;
  cursor: pointer;

  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const RsvCheck = styled(Link)`
  color: #6b7280;
  font-size: 0.875rem;
  font-weight: 600;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
