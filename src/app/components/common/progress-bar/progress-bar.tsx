import React, {Fragment} from 'react';
import {LineSeparator, ProgressBarWrapper} from './progress-bar.style';
import ProgressItem from './progress-item';

type Props = {
  step: number;
  nbrSteps?: number;
};

const ProgressBar = ({step, nbrSteps = 3}: Props) => {
  return (
    <ProgressBarWrapper>
      {[...Array(nbrSteps)].map((currStep, index) => (
        <Fragment key={`step-index-${index}`}>
          <ProgressItem active={step >= index + 1} />
          {index + 1 !== nbrSteps && (
            <LineSeparator active={step > index + 1} />
          )}
        </Fragment>
      ))}
    </ProgressBarWrapper>
  );
};

export default ProgressBar;
