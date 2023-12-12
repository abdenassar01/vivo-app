import styled from 'styled-components/native';
import {ThemeType} from '../../../../utils/theme';

export const LoaderWrapper = styled.View<{theme: ThemeType}>`
  flex: 1;
  background-color: ${({theme}) => theme.background};
  min-height: 500px;
  justify-content: center;
  align-items: center;
`;
