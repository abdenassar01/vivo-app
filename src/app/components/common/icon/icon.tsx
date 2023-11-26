import React from 'react';
import {ImageIcon} from './icon.style';

type Props = {
  uri: string;
  size?: number;
};

const Icon = ({uri, size = 24}: Props) => {
  return <ImageIcon size={size} source={{uri: uri}} />;
};

export default Icon;
