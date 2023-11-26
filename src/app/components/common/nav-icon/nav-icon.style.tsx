import {styled} from 'styled-components/native';
import {ThemeType} from '../../../../utils/theme';

export const NavIconWrapper = styled.View<{theme: ThemeType}>`
  flex-direction: row;
  align-items: center;
  padding: 5px 10px;
  gap: 5px;
  border-radius: 50px;
`;
