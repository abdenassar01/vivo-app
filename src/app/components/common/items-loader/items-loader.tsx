import React from 'react';
import {Swing} from 'react-native-animated-spinkit';
import {useTheme} from 'styled-components';
import {LoaderWrapper} from './item-loader.style';

const ItemLoader = () => {
  const theme = useTheme();

  return (
    <LoaderWrapper>
      <Swing size={48} color={theme.primary} />
    </LoaderWrapper>
  );
};

export default ItemLoader;
