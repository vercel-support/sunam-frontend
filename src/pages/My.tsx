import React from 'react';
import MyPageTemplate from '@/components/templates/MyPageTemplate';

const My = ({ match }) => {
  return (
    <MyPageTemplate>
      <h2>this my is {match.params.name} page!</h2>
    </MyPageTemplate>
  );
};

export default My;
