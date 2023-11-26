import React, {useState} from 'react';
import {
  LongTextWrapper,
  ToggleButton,
  ToggleButtonText,
} from './long-text.style';
import {MainText} from '../text';

type Props = {
  text: string;
  maxChar?: number;
};

function truncateString(str: string, num: number): string {
  if (str.length > num) {
    return str.slice(0, num) + '...';
  } else {
    return str;
  }
}

const LongText = ({text, maxChar}: Props) => {
  const [shownText, setShownText] = useState<string>(
    truncateString(text, maxChar || 150),
  );

  const handleToggle = () => {
    if (shownText === text) {
      setShownText(truncateString(text, maxChar || 150));
    } else {
      setShownText(text);
    }
  };

  return (
    <LongTextWrapper>
      <MainText>
        {shownText}
        <ToggleButton onPress={handleToggle}>
          <ToggleButtonText>
            {text === shownText ? ' See less' : ' See More'}
          </ToggleButtonText>
        </ToggleButton>
      </MainText>
    </LongTextWrapper>
  );
};

export default LongText;
