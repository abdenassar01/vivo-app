import React from 'react';
import {useTheme} from 'styled-components';
import {Swing} from 'react-native-animated-spinkit';
import {LoaderWrapper} from './loader.style';
import {StatusBar} from 'react-native';

const ScreenLoader = () => {
  const theme = useTheme();

  return (
    <LoaderWrapper>
      <StatusBar backgroundColor={theme.primary} />
      <Swing size={48} color={theme.background} />
    </LoaderWrapper>
  );
};

export default ScreenLoader;
