import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 64px);
`;

export const Inner = styled.div`
  min-width: 63.33vw;
  height: 100vh;
  padding-left: 1rem;
  padding-right: 1rem;
`;
