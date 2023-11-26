import React from 'react';
import {useTheme} from 'styled-components';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  GoBackWrapper,
  HeaderWrapper,
  ScreenTitleInverted,
} from './header.style';
// import Icon from 'react-native-vector-icons/Ionicons';

type Props = {
  title: string;
};

const HeaderInverted = ({title}: Props) => {
  const theme = useTheme();
  const {goBack} = useNavigation<StackNavigationProp<any>>();

  return (
    <HeaderWrapper>
      <GoBackWrapper onPress={goBack}>
        {/* <Icon color={theme.primary} name="arrow-back" size={24} /> */}
      </GoBackWrapper>
      <ScreenTitleInverted>{title}</ScreenTitleInverted>
    </HeaderWrapper>
  );
};

export default HeaderInverted;
