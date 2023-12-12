import styled from 'styled-components/native';
import {ThemeType} from '../../../../../utils/theme';
import {SecondaryHeading} from '../../../../components/common/text';

export const SignupSuccessWrapper = styled.View<{theme: ThemeType}>`
  flex: 1;
  justify-content: space-between;
  background-color: ${({theme}) => theme.background};
  padding: 0 24px 24px;
`;

export const CentredContent = styled.View`
  align-items: center;
  gap: 50px;
`;

export const MainImage = styled.Image`
  width: 116px;
  height: 116px;
`;

export const CentredText = styled(SecondaryHeading)<{theme: ThemeType}>`
  color: ${({theme}) => theme.secondaryBtnText};
  font-size: 22px;
  text-align: center;
`;
