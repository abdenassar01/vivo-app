import React from 'react';
import {GoBackWrapper, HeaderWrapper, ScreenTitle} from './header.style';
// import Icon from 'react-native-vector-icons/Ionicons';
import {useTheme} from 'styled-components';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import HeaderInverted from './header-inverted';

type Props = {
  title: string;
  invirted?: boolean;
};

const Header = ({title, invirted}: Props) => {
  const theme = useTheme();
  const {goBack} = useNavigation<StackNavigationProp<any>>();

  if (invirted) {
    return <HeaderInverted title={title} />;
  }

  return (
    <HeaderWrapper>
      <GoBackWrapper onPress={goBack}>
        {/* <Icon name="arrow-back" size={24} color={theme.primary} /> */}
      </GoBackWrapper>
      <ScreenTitle>{title}</ScreenTitle>
    </HeaderWrapper>
  );
};

export default Header;
