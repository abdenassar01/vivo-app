import React from 'react';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import {MainText} from '../text';
import {NavIconWrapper} from './nav-icon.style';
import {ThemeType} from '../../../../utils/theme';

type Props = {
  focused: boolean;
  label: string;
  icon: string;
  theme: ThemeType;
};

const NavigationIcon = ({icon, focused, label, theme}: Props) => {
  return (
    <NavIconWrapper
      style={{
        backgroundColor: focused ? theme.primary : theme.secondaryBackground,
      }}>
      <IonicIcon
        name={icon}
        size={20}
        color={focused ? theme.secondaryBackground : theme?.primary}
      />
      {focused && (
        <MainText
          style={{
            color: focused && theme.secondaryBackground,
          }}>
          {label}
        </MainText>
      )}
    </NavIconWrapper>
  );
};

export default NavigationIcon;
