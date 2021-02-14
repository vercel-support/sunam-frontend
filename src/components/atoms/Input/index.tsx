import React from 'react';
import * as Styled from './style';

const Input = props => {
  const { placeholder, onChange } = props;
  return <Styled.Input placeholder={placeholder} onChange={onChange} />;
};
export default Input;
