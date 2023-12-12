import React from 'react';
import {TitleText} from './title-header.style';

type Props = {
  title: string;
};

const TitleHeader = ({title}: Props) => {
  return <TitleText>{title}</TitleText>;
};

export default TitleHeader;
