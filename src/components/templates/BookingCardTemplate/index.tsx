import React from 'react';
import * as Styled from './style';

const BookingCardTemplate = ({ children }) => {
  return (
    <Styled.Container>
      <Styled.Inner>{children}</Styled.Inner>
    </Styled.Container>
  );
};

export default BookingCardTemplate;
