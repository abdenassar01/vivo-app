import i18next from 'i18next';
import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';

export const HeaderWrapper = styled.View`
  width: 100%;
  padding: 30px 0;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const CentredLogo = styled.Image`
  width: 115.85px;
  height: 28.22px;
`;

export const OpenDrawerIcon = styled(FastImage)`
  width: 24px;
  aspect-ratio: 1/1;
`;

export const Clickable = styled.TouchableOpacity`
  position: absolute;
  left: ${i18next.language === 'ar' ? "'auto'" : 0};
  right: ${i18next.language === 'ar' ? 0 : "'auto'"};
`;
