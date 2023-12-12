import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';

export const ImageIcon = styled(FastImage)<{size: number}>`
  width: ${({size}) => size}px;
  height: ${({size}) => size}px;
`;
