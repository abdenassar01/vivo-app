import styled from 'styled-components/native';
import {ThemeType} from '../../../../utils/theme';
import {MainText} from '../../common/text';
import FastImage from 'react-native-fast-image';

export const QuestionsOptionsWrapper = styled.View`
  gap: 10px;
  padding-top: 28px;
`;

export const QuestionOptionItem = styled.View<{
  theme: ThemeType;
  selected: boolean;
  correct: boolean;
}>`
  width: 100%;
  padding: 15px;
  border-width: 0.5px;
  border-color: #979797;
  flex-direction: row;
  gap: 5px;
  justify-content: center;
  align-items: center;
  border-radius: 17px;
  background-color: ${({theme, selected, correct}) =>
    selected ? (correct ? theme.primary : '#E92220') : theme.background};
`;

export const OptionSelectedIcon = styled(FastImage)`
  width: 22px;
  height: 22px;
`;

export const OptionText = styled(MainText)<{
  theme: ThemeType;
  selected: boolean;
}>`
  color: ${({theme, selected}) =>
    selected ? theme.white : theme.secondaryBtnText};
`;
