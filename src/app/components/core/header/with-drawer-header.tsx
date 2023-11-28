import React from 'react';
import {
  CentredLogo,
  Clickable,
  HeaderWrapper,
  OpenDrawerIcon,
} from './header.style';
import {DrawerActions, useNavigation} from '@react-navigation/native';

const WithDrawerHeader = () => {
  const {dispatch} = useNavigation();
  return (
    <HeaderWrapper>
      <Clickable onPress={() => dispatch(DrawerActions.openDrawer())}>
        <OpenDrawerIcon
          source={require('../../../../assets/icons/logout.png')}
        />
      </Clickable>
      <CentredLogo source={require('../../../../assets/logo-inverted.png')} />
    </HeaderWrapper>
  );
};

export default WithDrawerHeader;
