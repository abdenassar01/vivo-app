import styled from 'styled-components/native';
import {SecondaryHeading} from '../../common/text';
import {ThemeType} from '../../../../utils/theme';

export const TitleText = styled(SecondaryHeading)<{theme: ThemeType}>`
  font-size: 17px;
  color: ${({theme}) => theme.secondaryBtnText};
`;
