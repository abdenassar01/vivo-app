import React from 'react';
import {
  CentredLogo,
  Clickable,
  HeaderWrapper,
  OpenDrawerIcon,
} from './header.style';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {useLangStore} from '../../../../stores/lang';

type Props = {
  openDrower?: boolean;
};

const Header = ({openDrower = false}: Props) => {
  const {dispatch} = useNavigation();
  const {currentLang} = useLangStore();

  return (
    <HeaderWrapper>
      {openDrower && (
        <Clickable
          lang={currentLang}
          onPress={() => dispatch(DrawerActions.openDrawer())}>
          <OpenDrawerIcon
            source={require('../../../../assets/icons/menu.png')}
          />
        </Clickable>
      )}
      <CentredLogo source={require('../../../../assets/logo-inverted.png')} />
    </HeaderWrapper>
  );
};

export default Header;
