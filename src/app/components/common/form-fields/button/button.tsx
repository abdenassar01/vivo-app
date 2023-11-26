import React from 'react';
import {ActionButton, ButtonText} from './button.style';
import {GestureResponderEvent} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
import {useTheme} from 'styled-components';
// import {Swing} from 'react-native-animated-spinkit';

type Props = {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  text: string;
  icon?: string;
  width?: string | number;
  loading?: boolean;
  btnTheme?: 'primary' | 'secondary' | 'error' | 'warning';
};

const Button = ({
  onPress,
  text,
  icon,
  width,
  loading,
  btnTheme = 'primary',
}: Props) => {
  const {background, primary} = useTheme();

  return loading ? (
    <ActionButton
      btnTheme={btnTheme}
      disabled={loading}
      width={width}
      onPress={onPress}>
      {/* <Swing
        size={18}
        color={btnTheme === 'secondary' ? primary : background}
      /> */}
      <ButtonText btnTheme={btnTheme}>{text}</ButtonText>
    </ActionButton>
  ) : (
    <ActionButton btnTheme={btnTheme} width={width} onPress={onPress}>
      {/* {icon && (
         <Icon
           name={icon}
           size={18}
           color={btnTheme === 'secondary' ? primary : background}
         />
       )} */}
      <ButtonText btnTheme={btnTheme}>{text}</ButtonText>
    </ActionButton>
  );
};

export default Button;
