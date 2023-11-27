import React from 'react';
import {CentredLogo, HeaderWrapper} from './header.style';

const Header = () => {
  return (
    <HeaderWrapper>
      <CentredLogo source={require('../../../../assets/logo-inverted.png')} />
    </HeaderWrapper>
  );
};

export default Header;
