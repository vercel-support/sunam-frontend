import React from 'react';
import { BookingCard, PhoneAuth, CategoryList } from '@/components/molecules';
import { useBookingState, useBookingDispatch } from '@/stores/BookingContext';
import * as Styled from './style';

const content: ReadonlyArray<number | string | any> = [
  {
    id: 0,
    title: '원하시는 방문 목적을 선택해주세요.',
    notice: '필요하실 경우 현장에서 추가적인 상담을 요청할 수 있습니다.',
  },
  {
    id: 1,
    title: '원하시는 날짜와 시간을 선택해주세요.',
    notice: '상담 인원이 많을 경우 상담시간에 제약이 있을 수 있습니다.',
  },
  {
    id: 2,
    title: '방문(상담) 인원을 선택해주세요.',
    notice: '상담 인원이 많을 경우 상담시간에 제약이 있을 수 있습니다.',
  },
  {
    id: 3,
    title: '입력한 내용을 확인해주세요',
    notice: '예약 정보를 수정하시려면 취소 후 다시 예약 부탁드립니다.',
  },
];

const handleSubmit = e => {
  e.preventDefault();
  console.log('submit');
};

const Booking: React.FC = () => {
  const context = useBookingState();
  const dispatch = useBookingDispatch();
  const { step } = context;
  console.log('예약', context);
  return (
    <Styled.Container>
      <Styled.Wrapper>
        <BookingCard title={content[step].title} notice={content[step].notice}>
          {step === 3 ? <PhoneAuth /> : null}
          {step === 0 ? <CategoryList /> : null}
        </BookingCard>
        <Styled.ButtonWrapper>
          <Styled.BackButton
            type="button"
            onClick={() => dispatch({ type: 'BEFORE' })}
            disabled={step === 0}
          >
            <Styled.ButtonFont>이전</Styled.ButtonFont>
          </Styled.BackButton>
          {step !== 3 ? (
            <Styled.NextButton
              type="button"
              onClick={() => dispatch({ type: 'NEXT' })}
            >
              <Styled.ButtonFont>다음</Styled.ButtonFont>
            </Styled.NextButton>
          ) : (
            <Styled.NextButton type="submit" onClick={handleSubmit}>
              <Styled.ButtonFont>예약하기</Styled.ButtonFont>
            </Styled.NextButton>
          )}
        </Styled.ButtonWrapper>
      </Styled.Wrapper>
    </Styled.Container>
  );
};

export default Booking;
