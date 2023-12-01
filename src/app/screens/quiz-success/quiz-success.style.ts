import styled from 'styled-components/native';
import {
  Heading,
  MainText,
  SecondaryHeading,
} from '../../components/common/text';
import FastImage from 'react-native-fast-image';

export const QuizSuccessScreenWrapper = styled.ScrollView``;

export const CongratsText = styled(Heading)`
  font-size: 19px;
  color: #eaa207;
  text-align: center;
`;

export const CongratsImage = styled(FastImage)`
  width: 100%;
  aspect-ratio: 3.75/3.43;
  height: auto;
`;

export const WinnerName = styled(SecondaryHeading)`
  color: #5e5e5e;
  text-align: center;
`;

export const TextWrapper = styled.View``;

export const PointsLabel = styled(MainText)`
  color: #1c1c1c;
  font-size: 15px;
  text-align: center;
`;

export const NbrPoints = styled(Heading)`
  font-size: 30px;
  color: #36b50a;
  text-align: center;
`;
