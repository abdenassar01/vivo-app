import React from 'react';
import {
  ProgressItemWrapper,
  ProgressItemInnerCircle,
} from './progress-bar.style';

type Props = {
  active?: boolean;
};

const ProgressItem = ({active}: Props) => {
  return (
    <ProgressItemWrapper active={active}>
      <ProgressItemInnerCircle />
    </ProgressItemWrapper>
  );
};

export default ProgressItem;
