import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';
import {Heading} from '../../common/text';
import {ThemeType} from '../../../../utils/theme';

export const QuestionItemWrapper = styled.ScrollView`
  padding-top: 7px;
`;

export const QuestionImage = styled(FastImage)`
  width: 100%;
  aspect-ratio: 4/2.3;
  border-radius: 16px;
`;

export const QuestionText = styled(Heading)<{theme: ThemeType}>`
  font-size: 18px;
  color: ${({theme}) => theme.secondaryBtnText};
`;
