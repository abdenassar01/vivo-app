import styled from 'styled-components/native';
import {SecondaryHeading} from '../../components/common/text';
import {ThemeType} from '../../../utils/theme';
import {Dimensions} from 'react-native';

export const UpdatePasswordScreenWrapper = styled.View`
  height: ${Dimensions.get('screen').height - 120}px;
  justify-content: space-between;
  padding-bottom: 24px;
`;

export const FormWrapper = styled.View``;

export const GreetingText = styled(SecondaryHeading)<{theme: ThemeType}>`
  font-size: 24px;
  width: 222px;
  text-align: justify;
  color: ${({theme}) => theme.secondaryBtnText};
`;
