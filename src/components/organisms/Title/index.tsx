import React from 'react';
import * as Styled from './style';

const Title = () => {
  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.Title>도움이 필요하신가요?</Styled.Title>
        <Styled.SubTitle>
          {process.env.REACT_APP_PROJECTID} - 여러분의 이야기를 들려주세요.
        </Styled.SubTitle>
      </Styled.Wrapper>
    </Styled.Container>
  );
};

export default Title;
