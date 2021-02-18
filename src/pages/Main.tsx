import React from 'react';
import MainPageTemplate from '@/components/templates/MainPageTemplate';
import Title from '@/components/organisms/Title';
import Booking from '@/components/organisms/Booking';

const Main: React.FC = () => {
  return (
    <MainPageTemplate>
      <Title />
      {process.env.PROJECTID}
      <Booking />
    </MainPageTemplate>
  );
};

export default Main;
