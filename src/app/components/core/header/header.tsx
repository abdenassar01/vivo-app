import React from 'react';
import {
  CentredLogo,
  Clickable,
  HeaderWrapper,
  LanguageToggle,
  LanguageToggleIcon,
  LanguageToggleText,
  OpenDrawerIcon,
} from './header.style';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {useLangStore} from '../../../../stores/lang';
import {t} from 'i18next';

type Props = {
  openDrower?: boolean;
};

const Header = ({openDrower = false}: Props) => {
  const {dispatch} = useNavigation();
  const {currentLang, toggleLang} = useLangStore();

  return (
    <HeaderWrapper lang={currentLang}>
      {openDrower && (
        <Clickable onPress={() => dispatch(DrawerActions.openDrawer())}>
          <OpenDrawerIcon
            lang={currentLang}
            source={require('../../../../assets/icons/menu.png')}
          />
        </Clickable>
      )}
      <CentredLogo source={require('../../../../assets/logo-inverted.png')} />
      <LanguageToggle onPress={toggleLang} lang={currentLang}>
        <LanguageToggleIcon
          source={require('../../../../assets/icons/lang.png')}
        />
        <LanguageToggleText lang={currentLang}>
          {t('current-language-name')}
        </LanguageToggleText>
      </LanguageToggle>
    </HeaderWrapper>
  );
};

export default Header;
