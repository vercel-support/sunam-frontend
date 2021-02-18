import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from 'styled-components';
import * as Responsive from '@/utils/responsive';
import * as Styled from './style';

const Header = () => {
  const { width } = Responsive.useWindowSize();
  const { size } = useContext(ThemeContext);
  return (
    <Styled.Container>
      <Styled.Inner>
        <Styled.Home to="/">선암작명</Styled.Home>
        {width <= parseInt(size.mobile, 10) ? (
          <FontAwesomeIcon icon={faBars} />
        ) : (
          <Styled.RsvCheck to="/my">예약 조회</Styled.RsvCheck>
        )}
      </Styled.Inner>
    </Styled.Container>
  );
};

export default Header;
