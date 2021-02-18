import React from 'react';
import * as Styled from './style';

const MainPageTemplate = ({ children }) => {
  return (
    <Styled.Container>
      <Styled.Inner>{children}</Styled.Inner>
    </Styled.Container>
  );
};

export default MainPageTemplate;
