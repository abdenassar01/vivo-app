import React from 'react';
import {ActionButton, ButtonText} from './button.style';
import {GestureResponderEvent} from 'react-native';
import {Swing} from 'react-native-animated-spinkit';
import {useTheme} from 'styled-components';

type Props = {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  text: string;
  width?: string | number;
  loading?: boolean;
  btnTheme?: 'primary' | 'secondary' | 'error' | 'warning';
};

const Button = ({
  onPress,
  text,
  width,
  loading,
  btnTheme = 'primary',
}: Props) => {
  const {primary, background} = useTheme();

  return loading ? (
    <ActionButton
      btnTheme={btnTheme}
      disabled={loading}
      width={width}
      onPress={onPress}>
      <Swing
        size={18}
        color={btnTheme === 'secondary' ? primary : background}
      />
      <ButtonText btnTheme={btnTheme}>{text}</ButtonText>
    </ActionButton>
  ) : (
    <ActionButton btnTheme={btnTheme} width={width} onPress={onPress}>
      <ButtonText btnTheme={btnTheme}>{text}</ButtonText>
    </ActionButton>
  );
};

export default Button;
