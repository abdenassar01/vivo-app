import styled from 'styled-components/native';
import {ThemeType} from '../../../../../utils/theme';
import {SecondaryHeading} from '../../text';

export const RolesWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const RoleCard = styled.TouchableOpacity<{
  theme: ThemeType;
  active: boolean;
}>`
  border-width: 2px;
  border-color: ${({theme}) => theme.tertiary};
  background-color: ${({theme, active}) =>
    active ? theme.tertiary : theme.background};
  border-radius: 10px;
  padding: 10px;
  align-items: center;
`;

export const RoleImage = styled.Image`
  width: 45%;
  height: auto;
  aspect-ratio: 3/4;
`;

export const RoleLabelWrapper = styled.View<{
  theme: ThemeType;
  active: boolean;
}>`
  border-top-color: ${({theme, active}) =>
    active ? theme.background : theme.tertiary};
  border-top-width: 2px;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
`;

export const RoleLabel = styled(SecondaryHeading)<{
  theme: ThemeType;
  active: boolean;
}>`
  text-transform: capitalize;
  color: ${({theme, active}) => (active ? theme.background : theme.tertiary)};
`;
