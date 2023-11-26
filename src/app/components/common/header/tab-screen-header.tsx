import React from 'react';
import {CenteredWrapper, ScreenTitle} from './header.style';

type Props = {
  title: string;
};

const TabScreenHeader = ({title}: Props) => {
  //   https://i.imgur.com/6VoXFgY.png     -> 70kb logo
  return (
    <CenteredWrapper>
      <ScreenTitle>{title}</ScreenTitle>
    </CenteredWrapper>
  );
};

export default TabScreenHeader;
