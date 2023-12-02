import styled from 'styled-components/native';
import {MainText} from '../../components/common/text';
import {ThemeType} from '../../../utils/theme';

export const ProfileWrapper = styled.ScrollView``;

export const CentredContent = styled.KeyboardAvoidingView`
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const UpdatePasswordLink = styled.TouchableOpacity`
  width: 100%;
`;

export const UpdatePasswordText = styled(MainText)<{theme: ThemeType}>`
  color: ${({theme}) => theme.secondary};
  text-decoration: underline;
`;
