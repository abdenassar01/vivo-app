import React from 'react';
import {useTheme} from 'styled-components';
import {Swing} from 'react-native-animated-spinkit';
import {LoaderWrapper} from './loader.style';

const ScreenLoader = () => {
  const theme = useTheme();

  return (
    <LoaderWrapper>
      <Swing size={48} color={theme.background} />
    </LoaderWrapper>
  );
};

export default ScreenLoader;
