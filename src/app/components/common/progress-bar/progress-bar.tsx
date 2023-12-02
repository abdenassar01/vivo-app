import React, {Fragment} from 'react';
import {
  LineSeparator,
  ProgressBarHeaderText,
  ProgressBarWrapper,
} from './progress-bar.style';
import ProgressItem from './progress-item';

type Props = {
  step: number;
  nbrSteps?: number;
  headerText?: string;
};

const ProgressBar = ({step, nbrSteps = 3, headerText}: Props) => {
  return (
    <>
      {headerText && (
        <ProgressBarHeaderText>{headerText}</ProgressBarHeaderText>
      )}
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
    </>
  );
};

export default ProgressBar;
