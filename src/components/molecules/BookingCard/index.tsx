import React from 'react';
import BookingCardTemplate from '@/components/templates/BookingCardTemplate';
import * as Styled from './style';

interface Props {
  title: string;
  notice: string;
}

const BookingCard: React.FC<Props> = ({ title, notice, children }) => {
  return (
    <BookingCardTemplate>
      <Styled.Container>
        <Styled.Title>
          <Styled.TitleFont>{title}</Styled.TitleFont>
        </Styled.Title>
        <Styled.Content>{children}</Styled.Content>
        <Styled.Notice>
          <Styled.NoticeFont>{notice}</Styled.NoticeFont>
        </Styled.Notice>
      </Styled.Container>
    </BookingCardTemplate>
  );
};
export default BookingCard;
