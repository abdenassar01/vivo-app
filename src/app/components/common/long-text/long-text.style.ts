import styled from 'styled-components/native';
import {ThemeType} from '../../../../utils/theme';
import {MainText} from '../text';

export const LongTextWrapper = styled.View``;

export const ToggleButton = styled.TouchableOpacity``;

export const ToggleButtonText = styled(MainText)<{theme: ThemeType}>`
  color: ${({theme}) => theme.primary};
`;
