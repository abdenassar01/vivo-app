import React, { Fragment } from "react";
import {
  LineSeparator,
  ProgressBarHeaderText,
  ProgressBarWrapper,
} from "./progress-bar.style";
import ProgressItem from "./progress-item";
import { useLangStore } from "../../../../stores/lang";

type Props = {
  step: number;
  nbrSteps?: number;
  headerText?: string;
};

const ProgressBar = ({ step, nbrSteps = 3, headerText }: Props) => {
  const { currentLang } = useLangStore();

  return (
    <>
      {headerText && (
        <ProgressBarHeaderText>{headerText}</ProgressBarHeaderText>
      )}
      <ProgressBarWrapper lang={currentLang}>
        {[...Array(nbrSteps)].map((currStep, index) => (
          <Fragment key={`step-index-${index}`}>
            <ProgressItem active={step >= index + 1} />
            {index + 1 !== nbrSteps && (
              <LineSeparator nbrSteps={nbrSteps} active={step > index + 1} />
            )}
          </Fragment>
        ))}
      </ProgressBarWrapper>
    </>
  );
};

export default ProgressBar;
