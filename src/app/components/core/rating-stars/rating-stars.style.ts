import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';

export const StarsList = styled.View`
  flex-direction: row;
  gap: 5px;
`;

export const StarImage = styled(FastImage)<{size?: number}>`
  width: ${({size}) => size || 12}px;
  height: ${({size}) => size || 12}px;
`;
