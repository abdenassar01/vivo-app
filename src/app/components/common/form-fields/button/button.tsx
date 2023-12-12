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
  disabled?: boolean;
  btnTheme?: 'primary' | 'secondary' | 'error' | 'warning';
};

const Button = ({
  onPress,
  text,
  width = '100%',
  loading,
  btnTheme = 'primary',
  disabled,
}: Props) => {
  const {primary, background} = useTheme();

  //  loading ?
  return (
    <ActionButton
      btnTheme={btnTheme}
      disabled={disabled || loading || false}
      width={width}
      onPress={onPress}>
      {loading && (
        <Swing
          size={18}
          color={btnTheme === 'secondary' ? primary : background}
        />
      )}

      <ButtonText btnTheme={btnTheme}>{text}</ButtonText>
    </ActionButton>
  );
};

export default Button;
