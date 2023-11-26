import React from 'react';
import {ImageIcon} from './icon.style';

type Props = {
  name: string;
  size?: number;
};

const icon = ({name, size = 24}: Props) => {
  return (
    <ImageIcon
      size={size}
      source={require(`../../../../assets/icons/${name}.png`)}
    />
  );
};

export default icon;
